import React from "react";

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const WhoToFollowList = ()=> {
        const who = useSelector((state) => state.who);
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