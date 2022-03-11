import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import {ThreeCols} from "../common/index.js";

const ExploreScreen = () => {
    return (
        <ThreeCols active={'explore'} MiddleCol={ExploreComponent} RightCol={WhoToFollowList}/>
    )
}
export default ExploreScreen