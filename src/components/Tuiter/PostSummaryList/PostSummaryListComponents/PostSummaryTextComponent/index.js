
import React from "react";
import UserPostComponent from "./UserPostComponent";
import {Div} from "../../../common";

const PostSummaryText =({post: {topic, userName, time, title}})=><div className={'fw-bold'}>
    <Div className="wd-text-grey fw-normal" content={topic}/>
    <UserPostComponent usr={userName} time={time}/>
    <Div content={title}/>
</div>
export default PostSummaryText