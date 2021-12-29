import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

  state = {
    toggleMenu: false,
  }

  toggleMenu = () =>{
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  render() {
    const show = (this.state.toggleMenu) ? "show" : "";
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse "+ show }>             
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create Note
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
