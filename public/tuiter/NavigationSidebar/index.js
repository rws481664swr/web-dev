import SidebarList from './ListGroupItems.js'
console.log(`imported ${import.meta.url}`)
export default (active) => `
<div id="wd-sidebar" class="list-group">
${SidebarList(active)}
</div>
<div class="d-grid mt-2">
    <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
        Tweet
    </a> 
</div>
`;




console.log(`loaded module: ${import.meta.url}`)