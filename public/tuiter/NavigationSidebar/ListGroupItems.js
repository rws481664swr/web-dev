import Items from "./SidebarItems.js"
import NavigationSidebarItem from "./NavigationSidebarItem.js"

export default (active) => Items.map(NavigationSidebarItem(active)).join('\n')

console.log(`loaded module: ${import.meta.url}`)