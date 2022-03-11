import posts from './content/posts.json'
import PostListItem from './PostItem.js'
const PostList =()=>{
    return (
        <div>
             {posts.map((post,i)=> <PostListItem key={`post-list${i}`} post={post}/>)}
        </div>
    )

}
export default PostList