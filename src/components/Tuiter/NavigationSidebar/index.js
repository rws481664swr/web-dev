import React from "react";
import {TweetBtn} from "./TweetBtn.js";
import NavList from "./NavList/index.js";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <NavList active={active}/>
            <TweetBtn/>
        </>
    )
}
export default NavigationSidebar


