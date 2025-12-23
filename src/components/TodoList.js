import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onRemove={() => onRemove(index)} />
            ))}
        </ul>
    );
};

export default TodoList;