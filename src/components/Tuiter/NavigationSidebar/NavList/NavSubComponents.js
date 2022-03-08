import React from "react";

export const NavIcon = ({icon}) => {
    return (
        <div className={"pe-1"}>
            <i className={icon}/>
        </div>
    )
}
export const NavText = ({text}) => {
    return (
        <span className="d-none d-xl-block "> {text} </span>
    )
}