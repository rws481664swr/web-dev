import React from "react";
import {Div, Span} from "../common";

const CircleIcon = () => <i className={'fa-solid fa-circle'}/>
const UserPostComponent = ({usr: userName, time}) => (
    <div>
        {userName}
        <CircleIcon/>
        <Span className={"wd-text-grey fw-normal"} content={" - " + time }/>
    </div>
)

const PostSummaryImage = ({src: image}) => <img className={"rounded-3"} src={image} height="100px" width="100px"/>

const PostSummaryItem = ({post: {topic, userName, time, image, title}}) => {
    return (
        <li key={userName + title} className={"list-group-item d-flex justify-content-between"}>
            <div className="fw-bold">
                <Div className="wd-text-grey fw-normal" content={topic}/>
                <UserPostComponent usr={userName} time={time}/>
                <Div content={title}/>
            </div>
            <PostSummaryImage src={image}/>
        </li>

    )

}
export default PostSummaryItem
