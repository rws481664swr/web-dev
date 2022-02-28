import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";

function Labs() { return(
    <>
        <h1>Labs</h1>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
    </>
)};
export default Labs;
