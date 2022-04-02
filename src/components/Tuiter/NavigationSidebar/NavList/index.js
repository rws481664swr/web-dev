import items from "./items.json";
import NavigationSidebarItem from "./NavigationSidebarItem.js";
import { useSelector} from "react-redux";
import React from "react";
import {NavIcon} from "./NavSubComponents.js";
import {Link} from "react-router-dom";

function NavList() {

    const nav = useSelector(e => e.nav)

    return (
        <ul className={"ps-0"}>

            <li className="list-group-item d-flex justify-content-start">
                <Link  to={"/tuiter/home"}><NavIcon
                    icon={'fab fa-twitter'}/></Link>
            </li>
             {items.filter(e => e.id !== 'tuiter')
                .map((e, i) => <NavigationSidebarItem
                    key={e + "" + i}

                    active={nav.active} li_info={e}
                />)}
            <li>
            <Link to={'/tuiter/more'}
                   className={`${nav.active==='more'? 'active':''} list-group-item  d-flex justify-content-start `} >
                <div className="fa-stack">
                    <i style={{fontSize: '1em'}} className="fas fa-solid fa-circle fa-stack-1x"/>
                    <i style={{fontSize: '.5em'}} className="fas fa-solid text-black bg-transparent fa-ellipsis fa-stack-1x"/>
                </div>
                <div className="d-none  d-xl-block  align-self-start align-self-center align-self-middle ">More</div>
            </Link></li>
        </ul>
    )
}

export default NavList