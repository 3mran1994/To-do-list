import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles/App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); // New state addition

    const addTodo = (todoText) => { //structure of this line is const x = (input from user) then => function/logic
        setTodos([...todos, { text: todoText, completed: false}]);
    };

    const editTodo = (index) => { // adding the edit function
        setEditingIndex(index);
    }; 

    const cancelEdit = () => { // added the cancel function 
        setEditingIndex(null);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index); 
        setTodos(newTodos);
    };

    const saveTodo = (index, newText) => { // index is the "postion" of what task is changing and newText is what the new words are. Both of these are the parameters (inputs).
        const newTodos = [...todos]; // this is the new copy of our list (todos is the orginial list). [...] is the spread operator that copies. We have to make a copy of the list to make changes to it instead of editing the original list and then we replace the old list (todos) with the new one (newTodos).
        newTodos[index] = { ...newTodos[index], text: newText }; // newTodos[index] is the index (position) of task in the newTodos list we created. the {} part is the new object we create and "spread" the old task's [...] onfo into it including the completed status. The (text: nexText) is just overwriting the text values with the new text but keeping the completion status of the list untouched. 
        setTodos(newTodos); // this is our setter function; how we will update our old list with our new changes. we are telling react to redraw the list so the user sees the new task (text).
        setEditingIndex(null); // setter for our "who is editing" state. (null) is our value for nothing. this setter is for cleanup; to tell react that we are done editing and to close the input box and show the regular text again.
    }

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
            <AddTodo 
                onAdd={addTodo} 
            />
            <TodoList 
                todos={todos} 
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo} 
                editingIndex={editingIndex} // New addition 
                onEdit={editTodo} // New addition
                onCancel={cancelEdit} // New addition
                onSave={saveTodo} //New addition
            />
        </div>
    );
};

export default App;