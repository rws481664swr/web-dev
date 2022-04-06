import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../../actions/tuits-actions";

const ReactionComponent = ({tuit}) => {
    return (

        <div className=" d-flex   justify-content-start fw-light mx-3  wd-text-grey pe-4 ">
            <div className="d-flex justify-content-evenly">
                <ReactionSubComponent quantity={tuit.stats.comments} fa={"  wd-pe6 fa-regular   fa-comment"}/>
                <ReactionSubComponent quantity={tuit.stats.retuits} fa={"   wd-ps-6 wd-pe6  fa-solid    fa-retweet"}/>
                <Thumbs tuit={tuit}/>


                <ReactionSubComponent fa={"fa-solid   fa-arrow-up-from-bracket"}/>

            </div>

        </div>
    )
}
export default ReactionComponent


function ReactionSubComponent({children, quantity, fa}) {
    return (

        <span className={`mx-4`}>
                <i className={fa}/>
            {<span className="wd-ps-6 wd-pe6 ">{quantity || children}</span>}
            </span>

    )
}

function Thumbs({tuit   }) {
    const dispatch = useDispatch()
    return (

        <>
        <span
            onClick={() => {

                const newTuit = {...tuit}
                newTuit.liked = !tuit.liked
                newTuit.stats.likes += newTuit.liked ? 1 : -1
                updateTuit(dispatch, newTuit)
            }
            }
            className={`mx-4`}>
                <i className={`  ${tuit.liked && 'text-success'} fas  wd-ps-6 wd-pe6  fa-solid    fa-thumbs-up`}/>
            {<span className="wd-ps-6 wd-pe6 ">{tuit.stats.likes || 0}</span>}
            </span>
            <span
                onClick={() => {

                    const newTuit = {...tuit}
                    newTuit.disliked = !tuit.disliked
                    newTuit.stats.dislikes += newTuit.disliked ? 1 : -1
                    updateTuit(dispatch, newTuit)
                }
                }
                className={`mx-4`}>
                <i className={`  ${tuit.disliked && 'text-danger'} fas  wd-ps-6 wd-pe6  fa-solid    fa-thumbs-down`}/>
                {<span className="wd-ps-6 wd-pe6 ">{tuit.stats.dislikes || 0}</span>}
            </span>
        </>
    )


}