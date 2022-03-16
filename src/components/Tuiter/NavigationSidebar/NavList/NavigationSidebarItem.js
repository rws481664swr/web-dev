import React from 'react'
import {Link} from "react-router-dom";
import {NavIcon,NavText} from "./NavSubComponents.js";

const NavigationSidebarItem = ({on_click=()=> console.log(id),li_info:{id, text, icon}, active}) => {
    return (
            <Link key={id} to={`/tuiter/${id}`} onClick={on_click} className={
                `${active === id ? 'active' : ''} list-group-item d-flex justify-content-start`
            } >
                <NavIcon icon={icon}/>
                <NavText text={text}/>
            </Link>
     )
}
export default NavigationSidebarItem

