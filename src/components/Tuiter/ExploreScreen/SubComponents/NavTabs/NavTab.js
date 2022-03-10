const NavTab = ({active, text,}) => {
    const isactive = text.toLowerCase() === active
    return (
        <li key={text} className={`nav nav-item`}>
            {/*<Anchor href={'#'} className={'nav nav-link'+('active')} content={text}/>*/}
            <a href="#" className={`nav nav-link ${
                text.toLowerCase() === (active.toLowerCase()) && 'active'
            } `}>
                {text}
            </a>
        </li>
    )
}

export default NavTab