import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo"
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    //in functional components we can use useState
    const [ todos, setTodos ] = useState([
        { text: 'Pay bills', id: uuidv4() },
        { text: 'Do your homework', id: uuidv4() },
        { text: 'Feed the dog', id: uuidv4() },
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: uuidv4() }
        ]);
    }

    return (
        <div className="row">
            <div class="col-12 col-md-6">
                <AddNewTodo addTodo={addTodo} />
            </div>
            <div class="col-12 col-md-6">
            <ul className="list-group">
                {todos.map((todo) => 
                    <li className="list-group-item" key={todo.id}>{todo.text}</li>
                )}
            </ul>
            </div>
        </div>
    )
}

export default TodoList;