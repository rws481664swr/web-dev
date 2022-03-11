const NavTab = ({active, text,}) => {
    const text_lower = text.text.toLowerCase()
    return (
        <li key={text} className={`nav nav-item`}>
            <a href={`#${text_lower}`}
               className={`nav nav-link ${
                   text_lower === (active.toLowerCase()) && 'active'
               } `}>
                {text}
            </a>
        </li>
    )
}

export default NavTab