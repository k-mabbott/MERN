import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";
import {Routes, Route, Navigate } from "react-router-dom";
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';



function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Navigate to='/authors' />} />
        <Route path='/authors' element={<Main />} />
        <Route path='/author/new' element={<AddAuthor />} />
        <Route path='/author/:id/edit' element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
