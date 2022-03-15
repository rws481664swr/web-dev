import posts from './content/posts.json'
import TuitListItem from './PostItem.js'
const PostList =()=>{
    return (
        <div>
             {posts.map((post,i)=> <TuitListItem key={`post-list${i}`} post={post}/>)}
        </div>
    )

}
export default PostList