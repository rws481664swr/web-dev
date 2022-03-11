import React from "react";
import {HandleComponent, UserNameComponent} from "./subcomponents.js";

 const UserComponent = ({who: {userName, handle, avatarIcon}}) => {
     return (
        <>
            <img height="48px" width="48px" className={"align-center rounded-circle me-2"}
                 src={avatarIcon}
                alt={avatarIcon}/>
            <div className={"align-self-center"}>
                <UserNameComponent user={userName}/>
                <HandleComponent handle={handle}/>
            </div>
        </>
    )
}
export default UserComponent