import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import moment from 'moment';

const CreateNote = () => {    
    const params = useParams();
    
    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected ] = useState('');
    const [title, setTitle ] = useState('');
    const [content, setContent ] = useState('');
    const [date, setDate ] = useState('');
    const [editing, setEditing ] = useState(false);

    useEffect(() => {
        getUsers();          
    }, []);

    useEffect(() =>{
        if(params.id){                     
           getUser(params.id);
        }
    }, [params.id])

    const getUsers = async () =>{
        const res = await axios.get('http://localhost:4000/api/users');
        setUsers(res.data.map(user => user.username));
    }
    const getUser = async id => {
        const res = await axios.get(`http://localhost:4000/api/notes/${id}`);
        const date = moment(res.data.date).format('yyyy-MM-DD');
        setUserSelected(res.data.author);
        setTitle(res.data.title);
        setContent(res.data.content);
        setDate(date);
        setEditing(true);
    }
    
    const onInputChange = e => {         
        switch (e.target.name) {
            case 'userSelected':
                setUserSelected(e.target.value);                
                break;
            case 'title':   
                setTitle(e.target.value);
                break;  
            case 'content':     
                setContent(e.target.value)           
                break;   
            case 'date':                
                setDate(e.target.value)
                break; 
            default:
                break;
        }        
    }

    const onSubmit = async e =>{
        e.preventDefault();
        const newNote = {
            title,
            content,
            date,
            author: userSelected,
        }
        if(editing){
            await axios.put(`http://localhost:4000/api/notes/${params.id}`, newNote);
        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/';
    }

    return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body'>
                <h4>Create Note</h4>
                <div className='mb-2'>
                    <select className='form-control' 
                        name='userSelected'
                        value={userSelected}
                        onChange={onInputChange}
                        >
                        {
                            users.map(user => 
                            <option key={user}> 
                                {user}    
                            </option>)
                        }
                    </select>
                </div>
                <div className='mb-2'>
                    <input className='form-control'
                        type="text"                            
                        placeholder='Title'                        
                        name='title'
                        value={title}
                        onChange={onInputChange}
                        required
                        />
                </div>
                <div className='mb-2'>
                    <textarea className='form-control'
                        type="textarea"
                        placeholder='Content'
                        name='content'                                                    
                        value={content}
                        onChange={onInputChange}
                        required
                        >
                    </textarea>
                </div>
                <div className='mb-2'>
                    <input className='form-control'
                            type="date"      
                            name='date'                      
                            value={date}
                            onChange={onInputChange}                             
                            />
                </div>
                <form onSubmit={onSubmit}>
                    <button type="submit" className='btn btn-primary'>
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote;