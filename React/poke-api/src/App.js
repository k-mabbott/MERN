import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import PokeDisplay from './components/PokeDisplay/PokeDisplay';
import PokedisplayAxios from './components/PokeDisplayAxios/PokeDisplayAxios'



function App() {



  return (
    <div className="App">
      <PokeDisplay  />
    </div>
  );
}

export default App;
