import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router";
import {Routes, Route, Switch, Link} from "react-router-dom";
import Main from './views/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
