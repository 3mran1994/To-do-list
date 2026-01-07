// Goal of this component is to display a single todo item with its associated actions and let users interact with it.

import React, { useState } from 'react';

const TodoItem = ({ todo, onRemove, onToggle, index, editingIndex, onEdit, onCancel, onSave }) => {
    const [editText, setEditText] = useState(todo.text); //todo.text is the deafault value of what was already present in the task row. editText is waht the user is typing while editing. it intially starts as (todo.text) so that the edit box begins with the existing todo task text. We have a local useState here to keep typing input local until the user hits save where we then send the final text back up to change the master list.

    return (
        <li> 
            <input
                type="checkbox"
                checked={todo.completed} // makes it controlled by data: if todo.completed is true  then checkbox is checked, if false then unchecked.
                onChange={onToggle} // onChange is a react event. ontoggle came from TodoList as a prop, which wrapped the parent function with the correct index.
            />
            {index === editingIndex ? ( // conditional rendering: if this task's (row) index matches the editingIndex (the task being edited) then show the input box, otherwise show the the normal UI.
                <input 
                    type="text"
                    value={editText} // this input is controlled by the local state editText.
                    onChange={(e) => setEditText(e.target.value)} //(e) contain all changes made as an object (all properties)
                />
            ) : (
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '10px' }}>
                {todo.text}
                </span> 
            )}

            {index === editingIndex ? ( // same conditional rendering as above for the buttons: if the task is being edited show save/cancel buttons, otherwise show edit/delete buttons.
                <>
                    <button 
                        onClick={() => onSave(index, editText)} // for onSave we have added the function here instead of just calling because the function needs the input (index, editText) that is collected here in TodoList. Other button functions are placed in todoList as their required parameters (info they need to do their jobs) are already now within the todoList. We also have the wrapper function here as we are passing arguments and it would otherwise run immediatly on render.
                        style={{ marginLeft: '10px' }}
                    >Save
                    </button>
                    <button onClick={onCancel} style={{ marginLeft: '10px' }}>Cancel</button>
                </>
            ) : (
                <>
                    <button onClick={onEdit} style={{ marginLeft: '10px' }}>Edit</button>
                    <button onClick={onRemove} style={{ marginLeft: '10px' }}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;