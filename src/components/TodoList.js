import React, { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo"
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    //in functional components we can use useState
    const [ todos, setTodos ] = useState([
        { text: 'Pay bills', id: uuidv4(), done: false },
        { text: 'Do your homework', id: uuidv4(), done: false },
        { text: 'Feed the dog', id: uuidv4(), done: false },
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { text, id: uuidv4(), done: false }
        ]);
    }

    useEffect(() => {
        console.log("use effect", count);
    });

    useEffect(() => {
        console.log("use effect only count", count);
    }, [count]);

    useEffect(() => {
        console.log("use effect only first time component renders (todos)", todos)
    }, []);

    useEffect(() => {
        console.log("use effect only todos", todos)
    }, [todos]);

    return (
        <div className="row">
            <div class="col-12 col-md-6">
                <AddNewTodo addTodo={addTodo} />
                <button className="mt-3 btn btn-success" onClick={() => setCount(count + 1)}>Score: {count}</button>
            </div>
            <div class="col-12 col-md-6">
            <ul className="list-group">
                {todos.map((todo) => 
                    <li className="list-group-item" key={todo.id}>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id={"todo" + todo.id} />
                    <label class="form-check-label" for={"todo" + todo.id}>
                        {todo.text}
                    </label>
                    </div>
                    </li>
                )}
            </ul>
            </div>
        </div>
    )
}

export default TodoList;