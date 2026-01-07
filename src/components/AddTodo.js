// Goal of this feature/component: Let the used type text into a box, press Enter/click "Add Todo", and have a new  todo task appear in the main todo list

import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState(''); // inputValue is the named variable - text curently inside the input. It initially starts as an empty string (''). setInputValue is the set function that updates the inputValue.

    const handleSubmit = (e) => { // This is the function for when the user clicks submit to submit a new task to the todo list after typing it in the input box. (e) is the variable for the event and all its stored information (what changed, what happened, etc). 
        e.preventDefault(); // This stops default HTML browser behaviour of refreshing the whole page when a form is submitted.
        if (inputValue.trim()) { // .trim() is a built in function that removes any extra space at the start or end of a string. This condition checks if there is any text in the input box after trimming "spaces". This prevents adding "blank" tasks to the todo list IF there is text inside the input box THEN run the code inside the {}.
            onAdd(inputValue); // onAdd is the function prop we coded in App.js that adds a new task to the master todo list. We are calling that function here and passing in the text currently inside the input box (inputValue) as the new task in the list. 
            setInputValue(''); // This clears the input box back to an empty string after submission so the user can type a new task.
        }
    };

    return (
        <form onSubmit={handleSubmit}> {/* onSubmit is the event where the user submits the task, it will run the handleSubmit function. onSubmit allows for click and enter sumission (user is submitting data). onclick only handels clicking behavior and thus we would need to handle enter key separately*/}
            <input
                type="text"
                value={inputValue} {/* This sets the value of the input box to the current state variable inputValue, so the input box always shows the latest text the user has typed. Controlled input by React */}
                onChange={(e) => setInputValue(e.target.value)} {/* onChange is the event anytime the user types or changes the text inside the input box. e.target.value is the new text/current input text the user typed. We call setInputValue to update the state variable inputValue with the new text */}
                placeholder="Add a new todo" 
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo; // Makes this component available to import in other files.