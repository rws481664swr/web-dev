import items from "./items.json";
import NavigationSidebarItem from "./NavigationSidebarItem";
import More from './More'
function NavList({active}) {
    return (

        <ul className={"ps-0"}>
            {items.map((e,i) => <NavigationSidebarItem key={e+""+i} active={active} li_info={e}/> )}
            <More/>
        </ul>
    )
}
export default NavList