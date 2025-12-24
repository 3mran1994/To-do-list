import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleTodo }) => (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    onRemove={() => removeTodo(index)}
                    onToggle={() => toggleTodo(index)} 
                />
            ))}
        </ul>
);

export default TodoList;