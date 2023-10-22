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
        <div>
            <AddNewTodo addTodo={addTodo} />
            <ul>
                {todos.map((todo) => 
                    <li key={todo.id}>{todo.text}</li>
                )}
            </ul>
            
        </div>
    )
}

export default TodoList;