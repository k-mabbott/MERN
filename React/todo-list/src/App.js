import logo from './logo.svg';
import './App.css';
import TodoDisplay from './components/TodoDisplay'
import TodoForm from './components/TodoForm';
import {useState} from 'react'

function App() {

  const [todoList, setTodoList] = useState([]);

  const addListItem = (item) => {
    setTodoList(currentTodos => [...currentTodos, item])
  }

  const removeListItem = (i) => {
    setTodoList(currentTodos => currentTodos.filter((item,index) => index !== i))
  }

  const completeListItem = (i) => {
    const updatedTodos = [...todoList];
    updatedTodos[i].completed === false ? 
    updatedTodos[i].completed = true : 
    updatedTodos[i].completed = false
    setTodoList(updatedTodos)
  }



  return (
    <div className="App">
      <h1>Todo list:</h1>
      < TodoForm addListItem={addListItem} />
      < TodoDisplay todoList={todoList} removeListItem={removeListItem} 
      completeListItem={completeListItem} />
    </div>
  );
}

export default App;
