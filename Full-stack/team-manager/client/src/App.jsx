import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router";
import {Routes, Route, Switch, Link} from "react-router-dom";
import Main from './views/Main';
import { Navigate } from 'react-router-dom';
import AddPlayer from './views/AddPlayer';
import GameView from './views/GameView';


function App() {
  return (
    <div className="App">
      <h2 className='d-inline-block'>
        <Link to={'/players/list'} >Manage Players</Link>
        ||
        <Link to={'/status/game/1'} >Manage Player Status</Link>
      </h2>
      <Routes>
        <Route path='/' element={<Navigate to='/players/list' />} />
        <Route path='/players/list' element={<Main />} />
        <Route path='/players/addplayer' element={<AddPlayer />} />
        <Route path='/status/game/1' element={<GameView />} />
      </Routes>
    </div>
  );
}

export default App;
