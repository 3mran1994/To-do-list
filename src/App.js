import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles/App.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todoText) => {
        setTodos([...todos, { text: todoText, completed: false}]);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleTodo = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }
    return (
        <div className="app">
            <h1>Todo List</h1>
            <AddTodo onAdd={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;