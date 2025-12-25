import React, { useState } from 'react';

const TodoItem = ({ todo, onRemove, onToggle, index, editingIndex, onEdit, onCancel, onSave }) => {
    const [editText, setEditText] = useState(todo.text); //todo.text is the deafault value of what was already present in the task row

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle} // onChange is a react event
            />
            {index === editingIndex ? (
                <input 
                    type="text"
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)} //(e) contain all changes made as an object (all properties)
                />
            ) : (
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '10px' }}>
                {todo.text}
                </span> 
            )}

            {index === editingIndex ? (
                <>
                    <button 
                        onClick={() => onSave(index, editText)} // for onSave we have added the function here instead of just calling because the function needs the input (index, editText) that is collected here in TodoList. Other button functions are placed in todoList as their required parameters (info they need to do their jobs) are already now within the todoList.
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