import posts from './content/posts.json'
import TuitListItem from './PostItem.js'
import {useSelector} from "react-redux";
const PostList =()=>{
    const tuits = useSelector(s=>s.tuits)
    return (
        // <div>
        //      {posts.map((post,i)=> <TuitListItem key={`post-list${i}`} post={post}/>)}
        // </div>
    <div className={'list-group'}>
        {tuits.map((tuit)=> <TuitListItem className={'list-group-item'} key={`${tuit._id}`} tuit={tuit}/>)}
    </div>
    )

}
export default PostList