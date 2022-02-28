import React from 'react'
import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
    return (
        <ul>
            {
                todos.map((todo,i) => {
                    return (<TodoItem key={`idkey${i}`} todo={todo}/>)
                })
            }
        </ul>
    )
}
export default TodoList

