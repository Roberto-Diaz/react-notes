import React from 'react';  
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (    
    <BrowserRouter>
      <Navigation />
      <div className='container p-4'>
        <Routes>     
            <Route path="/" element={<NoteList/>} />
            <Route path="/edit/:id" element={<CreateNote users="" />} />
            <Route path="/create" element={<CreateNote/>} />
            <Route path="/user" element={<CreateUser/>} />          
        </Routes>   
      </div>         
    </BrowserRouter>
  );
}

export default App;
