import React, {useEffect, useLayoutEffect, useState} from "react";
import "./Home.css";
import {Link} from "react-router-dom"

const Home = () => {
    // const [valor, setvalor] = useState(0);
    // const incremental = () => {
    //     setvalor(valor+1);
    // }

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const todosLocal = JSON.parse(localStorage.getItem("todos")) || []; 
        setTodos(todosLocal);
    }, []);

    return (
        <div className="Home">
            <h2>Minhas tarefas</h2>
            {/* <button onClick={incremental}>Incrementar</button>{valor} */}
            <Link to="/form-todo">Nova Tarefa</Link>
            <ul>
                {todos.map(todo=>(
                    <li key={todo.key}>{todo.nomeTarefa} - {todo.observacao}</li>
                ))}
            </ul>
        </div>
    );
}
export default Home;