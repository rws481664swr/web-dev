import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";
import {ThreeCols} from "../common/index.js";

const HomeScreen = () => {
    return (
        <ThreeCols active={'home'}
                   MiddleCol={PostList}
                   RightCol={PostSummaryList}
        />
    )
}
export default HomeScreen