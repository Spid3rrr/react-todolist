import './App.css';
import ToDoList from './Components/ToDoList';
import { useState } from 'react';

function App() {
  const list = [
    { id: "0", text: "Apply for US Visa", done: false, date: new Date() },
    { id: "1", text: "Eat Healthy", done: false, date: new Date() },
    { id: "2", text: "Go to the gym", done: false, date: new Date() },
  ];
  const [listOfTasks, setList] = useState(list);
  const toggleTaskDone = (id) => {
      setList(listOfTasks.map(item => {if(item.id===id) item.done=!item.done; return item}));
  }
  const addTask = (text) => {
    const id = listOfTasks.map(x => parseInt(x.id)).reduce((a, b) => Math.max(a, b), -Infinity) + 1;
    const newTask = {id:id,text: text, done: false, date: new Date() };
    setList([...listOfTasks,newTask]);
  }
  const deleteTask = (id) => {
    setList(listOfTasks.filter(x => x.id!==id));
  }
  return (
    <div className="App">
      <ToDoList list={listOfTasks} toggleTaskDone={toggleTaskDone} addTask={addTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
