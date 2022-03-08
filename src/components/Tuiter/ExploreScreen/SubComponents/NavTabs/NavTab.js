const NavTab = ({active, text}) => {
    return (
        <li key={text} className={`nav nav-item`}>
            <a href="#" className={`nav nav-link ${
                text.toLowerCase() === (active.toLowerCase())&&'active'
            } `}>
                {text}
            </a>
        </li>
    )
}

export default NavTab