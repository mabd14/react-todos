import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");


  const addTodo = (todo) => {
    if(todo.trim() == '') return;
    const newTodo = {
      id: Math.random(),
      todo: todo
    }

    //add the todo to the list
    setList([...list, newTodo]);

    //clear input box
    setInput("");
  }


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from actually submitting (which would reload the page)
    addTodo(input);
  };

  const deleteTodo = (id) => {
    //create a new list that isn't the list item that has been pressed
    const newList = list.filter((todo) => todo.id != id)
    setList(newList)
  }




  return (
  <div>
    <h1>To-Do List</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
    <button type='submit' onClick={() => addTodo(input)}>Add</button>
    <ul>
      {list.map((todo) => (
        <li key={todo.id}>
          {todo.todo}
          <button onClick={() => deleteTodo(todo.id)}>&times;</button>
        </li>
      ))}
    </ul>
    </form>
  </div>
  )
}

export default App
