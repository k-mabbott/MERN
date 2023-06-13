import logo from './logo.svg';
import './App.css';
import React from "react";
import { useParams } from "react-router";
import Home from './components/Home';
import Display from './components/Display';
import DisplayColors from './components/DisplayColors';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/:display" element={<Display />} />
        <Route path="/:display/:bgColor/:fontColor" element={<DisplayColors />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Link to={"/"}>Go Home</Link> |
      | <Link to={"/hello"}>Go to Hello</Link>
    </div>
  );
}

export default App;
