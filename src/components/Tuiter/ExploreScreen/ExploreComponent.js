import React from "react";
import PostSummaryList from "../PostSummaryList";
import {ImageTextComponent, NavTabs, SearchField} from './SubComponents'

const ExploreComponent = () => {
    return (
        <div className=" ps-0 pe-0 border-top-0">
            <SearchField/>
            <ImageTextComponent/>
            <NavTabs active={'for you'}/>
            <PostSummaryList/>
        </div>
    )
}
export default ExploreComponent