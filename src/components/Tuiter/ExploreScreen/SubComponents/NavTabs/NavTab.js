const NavTab = ({active, text}) => {
    const isActive = text.toLowerCase() === (active.toLowerCase()) ? " active" : ''
    return (
        <li key={text} className={`nav nav-item`}>
            <a href="#" className={`nav nav-link ${isActive} `}>
                {text}
            </a>
        </li>
    )
}

export default NavTab