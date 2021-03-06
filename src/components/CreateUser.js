import React, { Component } from "react";
import axios from 'axios';

export default class CreateUser extends Component {
    state = {
        users: [],
        username: ''
    }

    async componentDidMount(){
       this.getUsers();
        console.log(this.state.users);  
    }

    onChangeUsername = (e) => {
       this.setState({
           username: e.target.value
       })
    }

    getUsers = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
        this.setState({ users: res.data });
    }

    deleteUser = async id => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);  
        this.getUsers();    
    }

    onSubmit = async e => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
            username: this.state.username
        }); 
        this.setState({ username: '' });
        this.getUsers();  
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="form-label"></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.username}
                                    onChange={this.onChangeUsername} 
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-4">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}