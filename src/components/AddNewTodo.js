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
                <div className="form-floating">
                    <input className="form-control" type="text" id="newTodo" placeholder="To do" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                    <label htmlFor="todo">To do</label>
                </div>
                <input className="mt-3 btn btn-primary" type="submit" value="Add new Todo" />
            </form>
        </div>
    );
}

export default AddNewTodo;