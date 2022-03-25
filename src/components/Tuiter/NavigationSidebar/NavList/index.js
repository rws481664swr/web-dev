import items from "./items.json";
import NavigationSidebarItem from "./NavigationSidebarItem.js";
import More from './More.js'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
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
            {items.map((e,i) => <NavigationSidebarItem key={e+""+i}
                                                       on_click={
                                                           () => on_click(e)
                                                       }
                                               active={sel.active} li_info={e}/> )}
            <More onclick={()=> on_click({id:'more'})} active={sel.active}/>
        </ul>
    )
}
export default NavList