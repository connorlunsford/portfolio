import React from 'react'

function ToDoItem(props) {
    if (props.completed === false) {
        return (
            <div className="ToDoDiv">
            <input 
                className="ToDoCheckbox" 
                type='checkbox' 
                checked={props.completed} 
                onClick={() => props.handleChange(props.id)}
                />
            <p className="ToDoP">{props.text}</p>
        </div>
        )
    }
    else {
        return (
            <div className="ToDoDiv">
            <input 
                className="ToDoCheckbox" 
                type='checkbox' 
                checked={props.completed} 
                onClick={() => props.handleChange(props.id)}
                />
            <p className="ToDoCompleted"><strike>{props.text}</strike></p>
        </div>
        )
    }
}

export default ToDoItem