import React from "react";
import {useDispatch } from "react-redux";
import {updateTuit} from "../../../../actions/tuits-actions";

const ReactionComponent = ({tuit}) => {
    return (

        <div className=" d-flex   justify-content-start fw-light mx-3  wd-text-grey pe-4 ">
            <div className="d-flex justify-content-evenly">
                <ReactionSubComponent quantity={tuit.stats.comments} fa={"  wd-pe6 fa-regular   fa-comment"}/>
                <ReactionSubComponent quantity={tuit.stats.retuits} fa={"   wd-ps-6 wd-pe6  fa-solid    fa-retweet"}/>
                <Thumbs tuit={tuit} colorClass={'text-success'} _key={'liked'} direction={'up'} statKey={'likes'}/>
                <Thumbs tuit={tuit} colorClass={'text-danger'} _key={'disliked'} direction={'down'}
                        statKey={'dislikes'}/>

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

function Thumbs({tuit, direction, _key, statKey, colorClass}) {
    const dispatch = useDispatch()
    console.log(tuit, direction, _key, statKey, colorClass)

    return (


        <span
            onClick={() => {

                const newTuit = {...tuit}
                newTuit[_key] = !newTuit[_key]
                newTuit.stats[statKey] += tuit[_key] ? 1 : -1
                updateTuit(dispatch, newTuit)
            }
            }
            className={`mx-4`}>
                <i className={`  ${tuit[_key] && colorClass} fas  wd-ps-6 wd-pe6  fa-solid    fa-thumbs-${direction}`}/>
            {
                <span className="wd-ps-6 wd-pe6 ">{tuit.stats[statKey]}</span>}
            </span>)


}