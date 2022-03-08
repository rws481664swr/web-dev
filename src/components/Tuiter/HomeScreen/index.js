import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";
import {ThreeCols} from "../common";

const HomeScreen = () => {
    return (
        <ThreeCols active={'home'}
                   MiddleCol={PostList}
                   RightCol={PostSummaryList}
        />
    )
}
export default HomeScreen