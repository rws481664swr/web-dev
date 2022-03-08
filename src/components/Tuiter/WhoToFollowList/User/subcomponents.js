import React from "react";


export const UserNameComponent = ({user}) => {
    return (
        <div>
            <span className="fw-bold">
                                {user} {" "}
            </span>
            <CheckedCircle/>
        </div>
    )


    function CheckedCircle() {
        return (<i className="fa-solid fa-circle-check"/>);
    }
}
export const HandleComponent = ({handle}) => {
    return (
        <div className="wd-handle">
            @{handle}
        </div>
    )
}