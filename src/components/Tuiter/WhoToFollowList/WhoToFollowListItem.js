import React from "react";
import UserComponent from "./User/index.js";


const WhoToFollowListItem = ({who}) => {
    return (
        <div className={"list-group-item wd-list-group-item-follow d-flex justify-content-between"}>
            <div className={" d-flex  align-content-start"}>
                <UserComponent who={who}/>
            </div>
            <FollowButton/>
        </div>
    )

    function FollowButton() {
        return (
            <button className={"align-self-center btn btn-primary wd-btn-follow  rounded-pill"}>Follow</button>
        )
    }
}
export default WhoToFollowListItem
