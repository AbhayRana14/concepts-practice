import React from 'react'

const TodoList = (props) => {
    
    return (
        <>
          <div className="btn-input">
            <li>{props.allItems} <button onClick={()=>{
                props.onSelect(props.id);
            }}>delete</button></li>
          </div>
        </>
    )
}

export default TodoList
