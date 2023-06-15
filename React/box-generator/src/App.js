import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/Box';
import React, {useState} from 'react';




function App() {

  const [boxes, setBoxes] = useState([])

  const addNewBox = (box) => {
    setBoxes(currentBoxes => [...currentBoxes, box])
  }

  return (
    <div className="App">
      
      < BoxForm addNewBox={ addNewBox } />
      <div className='allBoxes'>
        < Box boxes={ boxes } />
      </div>

    </div>
  );
}

export default App;
