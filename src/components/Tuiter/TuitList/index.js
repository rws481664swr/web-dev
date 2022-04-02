import TuitListItem from './PostItem.js'
import {useDispatch, useSelector} from "react-redux";
import {AvatarComponent, ContentComponent, ReactionComponent, TuitContentComponent} from "./TuitListComponents";
const PostList =()=>{
    const tuits = useSelector(s=>s.tuits)
    const dispatch = useDispatch()
    const deleteTuite = (tuit)=> dispatch ({type:'delete-tuit', tuit})
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
            <i onClick={() => deleteTuite(tuit)} className="fas fa-remove  fa-pull-right"/>
        </div>)
        }
    </div>
    )

}
export default PostList