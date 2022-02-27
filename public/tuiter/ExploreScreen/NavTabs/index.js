// export { default as SearchField } from "./SearchField.js";
// import { NavTab } from "./NavTabs.js";
// import tabs from './tabs.js';
export const NavTabs = () => tabs.map(NavTab).join('\n')

const tabs= [ 'For You', 'Trending', 'News', 'Sports', 'Entertainment' ]
const NavTab = (text) => `
<li id="nav-tab-${text.replace(' ','').toLowerCase()}" class="nav-item">
    <a  href="#" class="nav-link">${text}</a>
</li>
`
export default ()=> tabs.map(NavTab).join('\n')
