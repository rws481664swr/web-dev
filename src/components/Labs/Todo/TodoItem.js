import React from 'react'
const TodoItem = ({todo,__id: key})=> {
    const {done,title,status} = todo
   return (
        <li key={key}>
            <input type="checkbox" defaultChecked={done}/>
            {title}
            ({status})
        </li>
    )
}
export default TodoItem
