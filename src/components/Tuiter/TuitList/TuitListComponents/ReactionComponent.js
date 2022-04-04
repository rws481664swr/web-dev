
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {UPDATE_TUIT} from "../../../../actions/tuits-actions";
const  ReactionComponent = ({tuit}) => {
    const { retuits, comments, likes} = tuit.stats
    const dispatch = useDispatch();
    // const [likedness, setLikeDisLike] = useState({liked:tuit.liked, disliked:false})
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit}); };
    const stats = {...tuit.stats}

    const clickedLike = ()=> {
        if(tuit.liked){
            tuit.liked = false
            stats.likes--
        }else if (tuit.disliked){
            tuit.liked = true
            tuit.disliked = false
            stats.likes++
            stats.dislikes--
        }else{
            tuit.liked = true;
            stats.likes++
        }
    console.log(tuit.liked, stats)

            dispatch({type:UPDATE_TUIT , tuit:{...tuit , stats}})

    }
    const clickedDislike = ()=> {
        if(tuit.liked){
            tuit.disliked = true
            stats.likes--
            stats.dislikes++
        }else if (tuit.disliked){
            tuit.disliked = false
            stats.likes --
            stats.dislikes++
        }else{
            tuit.disliked = true;
            stats.dislikes++
        }
            dispatch({type:UPDATE_TUIT , tuit:{...tuit , stats}})
    }
    return (

        <div className=" d-flex   justify-content-start fw-light mx-3  wd-text-grey pe-4 ">
            <div className="d-flex justify-content-evenly">
                <ReactionSubComponent quantity={comments} fa={"  wd-pe6 fa-regular   fa-comment"} />
                <ReactionSubComponent quantity={retuits} fa={"   wd-ps-6 wd-pe6  fa-solid    fa-retweet"}/>
               <span onClick={clickedLike }>
                   {(tuit.liked &&
                   <ReactionSubComponent style={{color:'red'}}
                                         quantity={likes}
                                         className={''}
                                         fa=" text-primary  fas  wd-ps-6 wd-pe6  fa-solid    fa-thumbs-up"/>)
                  ||<ReactionSubComponent fa={"    fas  wd-ps-6 wd-pe6  fa-solid   fa-thumbs-up"}
                                          quantity={likes} /> }
                   {/*{!tuituit.liked &&  <ReactionSubComponent  quantity={likes} fa={"  far  wd-ps-6 wd-pe6  fa-regular    fa-heart"}>{likes}</ReactionSubComponent>}*/}
               </span>
               {/*<span onClick={clickedDislike }>*/}
               {/*    {tuit.disliked &&*/}
               {/*    <ReactionSubComponent style={{color:'red'}} quantity={likes} fa="    fas  wd-ps-6 wd-pe6  fa-solid    fa-thumbs-down"/>*/}
               {/*   ||<ReactionSubComponent fa={"    fas  wd-ps-6 wd-pe6  fa-solid   fa-thumbs-down"} quantity={likes} /> }*/}
               {/*    /!*{!tuituit.liked &&  <ReactionSubComponent  quantity={likes} fa={"  far  wd-ps-6 wd-pe6  fa-regular    fa-heart"}>{likes}</ReactionSubComponent>}*!/*/}
               {/*</span>*/}
                <ReactionSubComponent  fa={"fa-solid   fa-arrow-up-from-bracket"}/>

            </div>

        </div>
    )
}
export default ReactionComponent



function ReactionSubComponent({children,quantity,  fa}) {
    return (

            <span className={`mx-4`}>
                <i className={fa} />
                { <span  className="wd-ps-6 wd-pe6 ">{quantity||children}</span> }
            </span>

    )
}
