
import React from "react";
const ReactionComponent = ({reactions: {retweets, comments, likes}}) => {
    return (

        <div className=" d-flex   justify-content-start fw-light m-3  wd-text-grey pe-4 ">
            <div className="d-flex justify-content-evenly">
                <ReactionSubComponent quantity={comments} fa={"  wd-pe6 fa-regular   fa-comment"}/>
                <ReactionSubComponent quantity={retweets} fa={"   wd-ps-6 wd-pe6  fa-solid    fa-retweet"}/>
                <ReactionSubComponent quantity={likes} fa={"   wd-ps-6 wd-pe6  fa-regular    fa-heart"}/>
                <ReactionSubComponent  fa={"fa-solid   fa-arrow-up-from-bracket"}/>

            </div>

        </div>
    )
}
export default ReactionComponent

function ReactionSubComponent({quantity,  fa}) {
    return (

            <span className={`ms-4 me-4`}>
                <i className={fa} />
                {quantity  ? <span  className="wd-ps-6 wd-pe6 ">{quantity}</span> : ''}
            </span>

    )
}
