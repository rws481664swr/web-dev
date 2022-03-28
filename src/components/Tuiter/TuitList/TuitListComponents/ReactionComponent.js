
import React from "react";
const ReactionComponent = ({liked,stats}) => {
    const { retuits, comments, likes} = stats
    return (

        <div className=" d-flex   justify-content-start fw-light mx-3  wd-text-grey pe-4 ">
            <div className="d-flex justify-content-evenly">
                <ReactionSubComponent quantity={comments} fa={"  wd-pe6 fa-regular   fa-comment"}/>
                <ReactionSubComponent quantity={retuits} fa={"   wd-ps-6 wd-pe6  fa-solid    fa-retweet"}/>
                <ReactionSubComponent quantity={likes} fa={"   wd-ps-6 wd-pe6  fa-regular    fa-heart"}/>
                <ReactionSubComponent  fa={"fa-solid   fa-arrow-up-from-bracket"}/>

            </div>

        </div>
    )
}
export default ReactionComponent

function ReactionSubComponent({quantity,  fa}) {
    return (

            <span className={`mx-4`}>
                <i className={fa} />
                {quantity  && <span  className="wd-ps-6 wd-pe6 ">{quantity}</span> }
            </span>

    )
}
