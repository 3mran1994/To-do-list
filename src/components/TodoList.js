import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleTodo, editingIndex, onEdit, onCancel, onSave }) => (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    index={index} // This is the task's position in the list
                    editingIndex={editingIndex} // This is which task is being edited
                    onRemove={() => removeTodo(index)}
                    onToggle={() => toggleTodo(index)}
                    onEdit={() => onEdit(index)} // New addition 
                    onCancel={onCancel}
                    onSave={onSave} // we are just passing the function reference to todoItems as we don't know what the user typed into the input box that is in the todoItems.
                />
            ))}
        </ul>
);

export default TodoList;