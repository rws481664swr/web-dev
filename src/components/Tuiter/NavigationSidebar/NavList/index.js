import items from "./items.json";
import NavigationSidebarItem from "./NavigationSidebarItem.js";
import More from './More.js'
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {NavIcon, NavText} from "./NavSubComponents";
import {Link} from "react-router-dom";
// const tuiter = items.shift()
function NavList({active}) {
        const sel = useSelector((e)=>e.nav)
    console.log(sel)

    const dispatch = useDispatch()
    const on_click=   (e)=> {
        sel.active = e.id;
        let payload={active: e.id ,type:'nav'}
        console.log(`dispatched: ${JSON.stringify(payload)}`)
        dispatch(payload)
    }

    return (
        <ul className={"ps-0"}>

            <li className="list-group-item d-flex justify-content-start">
               <Link onClick={()=>on_click({id:'home'})} to={"/tuiter/home"}><NavIcon icon={'fab fa-twitter'}/></Link>
            </li>
            {/*//TODO refactor/clean up*/}
            {items.filter(e=>e.id !== 'tuiter')
                .map((e,i) => <NavigationSidebarItem key={e+""+i}
                                                       on_click={
                                                           () => on_click(e) && console.log(e)
                                                       }
                                               active={sel.active} li_info={e}/> )}
            <More onclick={()=> on_click({id:'more'})} active={sel.active}/>
        </ul>
    )
}
export default NavList