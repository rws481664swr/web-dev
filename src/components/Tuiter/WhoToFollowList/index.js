import React from "react";
import who from './who.json'
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = ()=> {
return (
    <div className="list-group pt-3 wd-list-group-follow">
        <div className="list-group-item wd-list-group-item-follow fw-bold">
            Who To Follow
        </div>
        {who.map(w => {
        return (<WhoToFollowListItem key={w.userName } who={w}/>)
    })}
    </div>

)

}
export default WhoToFollowList