import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleTodo, editingIndex, onEdit, onCancel, onSave }) => ( // The TodoList component is responsible for the display of the todo items. The props are "inputs" passed into the component from the parent (App.js). We are destructuring the props object to get the specific props we need.
        <ul> {/* Html list */}
            {todos.map((todo, index) => ( // .map is a built in JS function that goes through an array one by one and creates a new array based on the return value of the function inside the (). For each item in the todos List/array, we are running the function (todo, index) => {...} where (todo) is the specific task item and (index) is the position of that task in the list. The function returns a TodoItem component for each task in the list.
                <TodoItem 
                    key={index} // key is a special prop in React that helps React identify which items have changed, are added, or are removed. We use index as a simple unique identifier for each item (index is a common choice but it can lead to issues in some cases if the list changes dynamically).
                    todo={todo} 
                    index={index} // This is the task's position in the list. This and editingIndex allow TodoItem to decide if it should show the normal text with the edit/delete button, or the edit input box with the save/cancel buttons.
                    editingIndex={editingIndex} // This is which task is being edited
                    onRemove={() => removeTodo(index)} // onRemove is a function prop we are passing down to TodoItem. We are giving TodoItem a function to call (on click). Without the () => ... syntax, it would call removeTodo immediately during rendering instead of waiting for the user to click. 
                    onToggle={() => toggleTodo(index)}
                    onEdit={() => onEdit(index)} 
                    onCancel={onCancel} // we are just passing the function. Needs no arguments as its just a cancels edit mode.
                    onSave={onSave} // we are just passing the function reference to todoItems as we don't know what the user typed into the input box that is in the todoItems.
                />
            ))}
        </ul>
);

export default TodoList;