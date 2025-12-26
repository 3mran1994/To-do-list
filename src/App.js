import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles/App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); // New state addition
    const [previousTodos, setPreviousTodos] = useState(null); // Use state for undo feature.

    const remainingTasks = todos.filter (todo => todo.completed === false).length // todos is our master list (the array of all the tasks). .filter is a built in JS function that goes through the list one by one and checks if meets the conditions for it to stay or go (does it belong in the new list). For the contents of the filter function, todo (without the s) is the specific task on the list, todo.completed === false is the rule for the filter. if a task meets this condition, that it is not completed (false) then the filter will keep it in the list. If it is completed the filter will filter it out of the calculation. .length is a property of arrays that tells the count of how many items are inside tht array. So after the filter finishes it creates a new list of only the unfinished tasks and . length counts them and gives us the number.

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
    };

    const toggleTodo = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => { // New addition. I added this on my own!
        setPreviousTodos(todos); //Not my free hand addition. This step saves the backup list from the current "master" list; the todos.
        const newTodos = todos.filter(todo => todo.completed === false); //set variable newTodos with it's rules.
        setTodos(newTodos); //replace setTodos with newTodos filtered above. This updates the list to the new list. 
    };

    const undoClear = () => { // No inputs need because we are just grabbing the backup we already have.
        setTodos(previousTodos); // setting our master list to the saved backup list.
        setPreviousTodos(null); // this is setting the backup state back to null, so there is no saved backup. it basically clears the memory. This is used to make the undo button dynamic and only show up if there is something in the back up to restore.
    };

    return (
        <div className="app">
            <h1>Todo List</h1> 
            <p>You have {remainingTasks} {remainingTasks === 1 ? "task" : "tasks"} remaining</p> {/* we are referancing the variable remainingTasks in {} so that the text will show us the dynamic number of tasks remaining. The turnary operator sets the condition that if the amount of task (remainingTasks) is exactly equal to only 1 then print "task" singular in the paragraph, and if it does not equal 1 than print "tasks" in the paragraph. This allows us to have a set paragraph that can change dynamically */}
            {todos.some(todo => todo.completed) && ( // todos.some(...) is a built in function that returns true if it finds at least one item that matches the rule. todo=>todo.completed is the rule, it looks for any task where completed is true (todo.completed is a shortcut for todo.completed === true). 
                <button onClick={clearCompleted}>Clear Completed</button>
            )}
            {previousTodos && ( // && is React for AND operator for Show/Hide logic. This is the undo 
                <button onClick={undoClear} style={{ marginLeft: '10px' }}>
                    Undo
                </button>
            )}
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