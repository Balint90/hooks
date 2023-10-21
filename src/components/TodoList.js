import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    //in functional components we can use useState
    const [ todos, setTodos ] = useState([
        { text: 'Pay bills', id: uuidv4() },
        { text: 'Do your homework', id: uuidv4() },
        { text: 'Feed the dog', id: uuidv4() },
    ]);

    const addTodo = () => {
        const newTodoInput = document.getElementById('newTodo');
        if(newTodoInput.value !== ''){
            setTodos([
                ...todos,
                { text: newTodoInput.value, id: uuidv4() }
            ]);
            newTodoInput.value = '';
        }
    }

    return (
        <div>
            <form>
                <input type="text" id="newTodo" />
            </form>
            <button onClick={addTodo}>Add a todo</button>
            <ul>
                {todos.map((todo) => 
                    <li key={todo.id}>{todo.text}</li>
                )}
            </ul>
            
        </div>
    )
}

export default TodoList;