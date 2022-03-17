import React from "react";
import {CheckedCircle} from "../../common/index.js";


export const UserNameComponent = ({user}) => {
    return (
        <div>
            <span className="fw-bold">
                {user} {" "}
            </span>
            <CheckedCircle/>
        </div>
    )



}
export const HandleComponent = ({handle}) => {
    return (
        <div className="wd-handle">
            @{handle}
        </div>
    )
}