import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: '', done: false});
    const dispatch = useDispatch();

    // const createTodoClickHandler = () => dispatch({type: 'create-todo', todo})
    // const todoChangeHandler = (event) => setTodo({do: event.target.value});
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }


    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
    }
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map((todo,i) =>
                        <li key={todo.do+''+ i} className="list-group-item">
                            <input checked={todo.done} onChange={
                                event => updateTodoClickHandler(
                                    {
                                        ...todo,
                                        done: event.target.checked
                                    })} type="checkbox"/>
                            {todo.do}
                            <button onClick={() =>
                                deleteTodoClickHandler(todo)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }

                <li key={'__add-key'} className="list-group-item">
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary">
                        Create New Todo
                    </button>
                </li>
            </ul>
        </>
    )
}

export default Todos;