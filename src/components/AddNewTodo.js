import React, { useState } from "react";

const AddNewTodo = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = newTodo.trim();
        if(todo !== '') {
            addTodo(todo);
            setNewTodo('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">To do: </label>
                <input type="text" id="newTodo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <input type="submit" value="Add new Todo" />
            </form>
            
        </div>
    );
}

export default AddNewTodo;