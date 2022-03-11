import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes/index.js";
import Styles from "./Styles/index.js";
import ConditionalOutput from "./ConditionalOutput/index.js";
import TodoList from "./Todo/TodoList.js";

function Labs() { return(
    <>
        <h1>Labs</h1>
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link>

            <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoList/>
    </>
)};
export default Labs;
