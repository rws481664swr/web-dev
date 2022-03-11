import tabs from './tabs.json'
import NavTab from './NavTab.js'
const NavTabs = ({active="for you"})=>{
    return (
        <ul className={"nav nav-tabs mb-2 "}>
            {tabs.map(text=>(<NavTab key={text} active={active} text={text}/>))}
        </ul>
        )
}
export default NavTabs