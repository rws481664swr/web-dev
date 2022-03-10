import {CircleIcon, Span} from "../../../common";
import React from "react";

const UserPostComponent = ({usr: userName, time}) => (
    <div>
        {userName}{userName&& ' '}
        <CircleIcon/>
        <Span className={"wd-text-grey fw-normal"} content={" - " + time }/>
    </div>
)

export default UserPostComponent