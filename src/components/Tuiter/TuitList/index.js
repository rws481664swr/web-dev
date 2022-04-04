 import {useDispatch, useSelector} from "react-redux";
import {AvatarComponent, ContentComponent, ReactionComponent, TuitContentComponent} from "./TuitListComponents";
 import {useEffect} from "react";
 import {deleteTuit, findAllTuits} from "../../../actions/tuits-actions";
const PostList =()=>{
    const tuits = useSelector(s=>s.tuits)

    const dispatch = useDispatch()

    useEffect( ()=>findAllTuits   (dispatch)   , [dispatch]);

      return (
    <div className={'list-group'}>
        {tuits.map(
            (tuit)=>
                <div key={`${tuit._id}`} className={`list-group-item  d-flex  justify-content-start  ms-4 me-2 wd-border-1px `}>
            <AvatarComponent src={tuit['avatar-image']}/>
            <div className={'me-2'}>
                <TuitContentComponent tuit={tuit}/>
                <ContentComponent tuit={tuit}/>
                <ReactionComponent tuit={tuit}/>
            </div>
            <i onClick={() => deleteTuit (dispatch,tuit)} className="fas fa-remove  fa-pull-right"/>
        </div>)
        }
    </div>
    )

}
export default PostList