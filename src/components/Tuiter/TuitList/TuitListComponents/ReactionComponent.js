
import React from "react";
import {useDispatch} from "react-redux";
const ReactionComponent = ({tuit}) => {

    const { retuits, comments, likes} = tuit.stats
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit}); };

    return (

        <div className=" d-flex   justify-content-start fw-light mx-3  wd-text-grey pe-4 ">
            <div className="d-flex justify-content-evenly">
                <ReactionSubComponent quantity={comments} fa={"  wd-pe6 fa-regular   fa-comment"}/>
                <ReactionSubComponent quantity={retuits} fa={"   wd-ps-6 wd-pe6  fa-solid    fa-retweet"}/>
               <span onClick={likeTuit}>
                   {tuit.liked && <ReactionSubComponent style={{color:'red'}} quantity={likes} fa=" wd-color-red  fas  wd-ps-6 wd-pe6  fa-regular    fa-heart"/>}
                   {!tuit.liked &&  <ReactionSubComponent  quantity={likes} fa={"  far  wd-ps-6 wd-pe6  fa-regular    fa-heart"}/>}
               </span>
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
