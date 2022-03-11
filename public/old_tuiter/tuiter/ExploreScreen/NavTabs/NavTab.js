const NavTab = (text ,active='For You') => `
<li id="nav-tab-${text.replace(' ','').toLowerCase()}" 
    class="nav nav-item">
    <a  href="#" class="nav-link  ${text.toLowerCase()===(active.toLowerCase()) ? "active" : ''}">${text}</a>
</li>
`
export default NavTab
