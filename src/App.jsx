import "./App.css";
import { useState } from 'react'
export default function App() {

  const [todo, setTodo] = useState ([]);
  const [newTask, setNewTask] = useState ("")

  const handleChange = (event) => {
    setNewTask (event.target.value)
  }
  const addTask = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: newTask,
    }
     setTodo ([...todo, task]);
  };

  const deleteTask = (id) => {
setTodo (todo.filter((task) => task.id !== id));  
  };

  return (
    <div className="App">
      <h2 className="heading"> To Do List </h2>
      <div className="inputs">
        <input type="text" placeholder="Enter your task" onChange={handleChange}/>
        <button className="button" onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todo.map((task) => {
          return <div className="block-div">
             <p className="task-added">{task.taskName}</p> 
             <button className="second-button" onClick={ () => deleteTask (task.id) }>Delete</button>
             </div>
        })}
      </div>
      <footer>
      <p className="footer">Designed with <span>&hearts;</span> by Martha Ochuko || 2022</p>
      </footer>
    </div>
  );
}
