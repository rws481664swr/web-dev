import WhoToFollowListItem from './WhoToFollowListItem.js'
import who from "./who.js";

export default  ()=>   `
    
<div class="list-group pt-3 wd-list-group-follow">
    <div  class="list-group-item wd-list-group-item-follow fw-bold">
     Who To Follow
     </div>
    ${who.map(WhoToFollowListItem).join('\n')}
</div>

`

;console.log(`loaded module: ${import.meta.url}`)

