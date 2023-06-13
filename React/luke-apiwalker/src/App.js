import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router";
import {
  Routes,
  Route,
  Switch,
  Link
} from "react-router-dom";

import SearchForm from './components/SearchForm';
import DisplayPerson from './components/DisplayPerson';
import DisplayPlanet from './components/DisplayPlanet';
import DisplayShips from './components/DisplayStarships';
import Error from './components/Error';

function App() {



  // const {category} = useParams();
  // const {id} = useParams();

  // useEffect(() => {
  //   console.log(category)
  //   axios.get('https://swapi.dev/api/'+category+'/'+id)
  //   .then(response => console.log(response))

  // }, [])



  return (
    <div className="App">
        <>
        <h1>Luke API Walker!</h1>
        <SearchForm />
          <Routes>
            
            <Route path="/" element={<></>} />
            <Route path="/planets/:id" element={<DisplayPlanet />} />
            <Route path="/people/:id" element={<DisplayPerson  />} />
            <Route path="/starships/:id" element={<DisplayShips  />} />
            <Route path="/error" element={<Error />} />

          </Routes>
        </>
    </div>
  );
}

export default App;
