import React from "react";
import {PostSummaryImage, PostSummaryText} from './PostSummaryListComponents/index.js';


const PostSummaryItem = ({post: {topic, userName, time, image, title}}) => {
    return (
        <li key={userName + title} className={"list-group-item d-flex justify-content-between"}>
            <PostSummaryText post={{topic, userName, time, title}}/>
            <PostSummaryImage src={image}/>
        </li>

    )

}
export default PostSummaryItem
