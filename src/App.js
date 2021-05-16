import './App.css';

import React, { useState } from 'react'
import TodoList from './components/todoList/TodoList';

const App = () => {
  const [inputItems,setInputItems] = useState("");
  const [Items,setItems] = useState([]);
  const getText = (event) => {
    setInputItems(event.target.value);
  };
  const setListArray = () =>{
     setItems((oldItems)=>{
       return [...oldItems,inputItems];
     })
     setInputItems("");
  };

  const deleteItems = (id) => {
   setItems((oldItems)=>{
     return oldItems.filter((arrElem,index)=>{
       return index !== id;
     });
   })
  };

  return (
    <>
    <div className="main-container">
      <div className="list-container">
        <h1>TO-DO LIST</h1>
        <input
        className="inp"
        type="text"
        placeholder="Add a new Memo"
        value={inputItems}
        onChange={getText}
        />
        <button
        className="btn"
        onClick={setListArray}
        >Add</button>
      </div>
      <div className="list">
        <ul>
          {
            Items.map((allItems,index)=>{
              return <TodoList 
              id={index}  
              key={index} 
              allItems={allItems}
              onSelect={deleteItems}/>
            })
          }
        </ul>
      </div>
    </div>
    </>
  )
}

export default App


