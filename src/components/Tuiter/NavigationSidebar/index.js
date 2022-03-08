import React from "react";
import {TweetBtn} from "./TweetBtn";
import NavList from "./NavList";

const NavigationSidebar = ({active = 'explore'}) => {
    return (
        <>
            <NavList active={active}/>
            <TweetBtn/>
        </>
    )
}
export default NavigationSidebar


