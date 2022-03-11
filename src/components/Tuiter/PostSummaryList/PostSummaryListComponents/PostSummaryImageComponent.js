import React from "react";

const PostSummaryImage = ({src: image , sz=100}) =>(
    <img className={"rounded-3"}
         src={image} alt={image}
         height={`${sz}px`}
         width={`${sz}px`}/>
)
export default PostSummaryImage