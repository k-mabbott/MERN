import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router";
import {Routes, Route, Switch, Link} from "react-router-dom";
import Main from './views/Main';
import ProductOne from './views/ProductOne';
import ProductUpdate from './views/ProductUpdate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product/:id' element={<ProductOne />} />
        <Route path='/:id/edit' element={<ProductUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
