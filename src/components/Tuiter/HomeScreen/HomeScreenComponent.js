import PostList from "../PostList/index.js";
import {Span} from "../common/index.js";

const HomeScreenComponent = ()=>{
return (
    <div>
        <Span content={"<a href='www.google.com'>google.com</a>"}/>
        <PostList/>
    </div>
)
}
export default HomeScreenComponent