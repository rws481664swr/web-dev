import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from './posts.json'

const PostSummaryList = () => {
    return (
        <div className="list-group wd13">
            {posts.map((item,i) => <PostSummaryItem key={`${item.userName}${i}`} post={item}/>)}

        </div>
    )
}


export default PostSummaryList