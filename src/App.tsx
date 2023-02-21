import React,{useState} from 'react';
import {AiFillDelete} from 'react-icons/ai'
import './App.css';
let currId = 0;

function App() {
  const [list, setList] = useState<any[]>([])
  const [task, setTask] = useState('')
  return (
    <div className="App">
       <h1>Todos</h1>
      <div className='inputField'>
        <input type="text" required value={task} onChange={(e) => {
          setTask(e.target.value)
        }} />
        <button onClick={() => {
          if (task=="") {
            alert("Please Enter a task name")
          }else {
          list.push({
            "id": currId++,
            "taskName": task,
          })
          setTask("")
          console.log(list);
        }}}>Add</button>
      </div>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id} className='listContainer' >
              <div>
              <p>{item.taskName} </p>
              </div>
              <div>
                <p>
                <AiFillDelete onClick={() => {
                setList(list.filter(a =>
                   a.id!==item.id
                ))
              }}/>
                </p>
              
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
