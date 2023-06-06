
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';



function App() {
  return (
    <>
    <div className="App">
      <Header firstName={ "Bill" } lastName={ "Justice" }></Header>
    </div>
    </>
  );
}

export default App;
