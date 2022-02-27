import  NavTab  from "./NavTab.js";
import  tabs  from "./tabs.js";
export const NavTabs = () => tabs.map(tab=> NavTab(tab,"For You")).join('\n')

// const tabs= [ 'For You', 'Trending', 'News', 'Sports', 'Entertainment' ]

export default  NavTabs
