import PostList from "../PostList";
import {Span} from "../common";

const HomeScreenComponent = ()=>{
return (
    <div>
        <Span content={"<a href='www.google.com'>google.com</a>"}/>
        <PostList/>
    </div>
)
}
export default HomeScreenComponent