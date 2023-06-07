
import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyNewComponent from './components/Header';



function App() {
  return (
    <div className="App">
        <MyNewComponent header={ "Header Prop" }>
            <h1>These are children</h1>
            <p>This is a child</p>
            <div>
              <p>Hi</p>
            </div>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent>  
    </div>
  );
}

export default App;
