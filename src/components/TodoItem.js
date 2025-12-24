import React from 'react';

const TodoItem = ({ todo, onRemove, onToggle }) => (
    <li>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={onToggle}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginLeft: '10px' }}>
            {todo.text}
        </span> 
        <button onClick={onRemove} style={{ marginLeft: '10px' }}>Delete</button>
    </li>
);

export default TodoItem;