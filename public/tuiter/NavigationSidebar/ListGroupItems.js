import Items from "./SidebarItems.js"
import NavigationSidebarItem from "./NavigationSidebarItem.js"

export default (active) => `${
    Items.map(e=>NavigationSidebarItem(e,active)).join('\n')
}
<!--More special case-->
<a class="list-group-item  d-flex justify-content-start " href="#">
    <div class="fa-stack">
    <i style="font-size: 1em;" class="fas fa-solid fa-circle fa-stack-1x"></i>
    <i style="font-size: .5em;"
   class="fas fa-solid       text-black bg-transparent fa-ellipsis fa-stack-1x"></i>
</div>
<div class="d-none  d-xl-block  align-self-start align-self-center align-self-middle ">More</div>
</a>\`
`

console.log(`loaded module: ${import.meta.url}`)