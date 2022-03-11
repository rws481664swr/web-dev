import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";
import {ThreeCols} from "../common";

const ExploreScreen = () => {
    return (
        <ThreeCols active={'explore'} MiddleCol={ExploreComponent} RightCol={WhoToFollowList}/>
    )
}
export default ExploreScreen