import posts from './posts.js'
import PostSummaryItem from "./PostSummaryItem.js";

export default ()=>`
<ul class="list-group wd13">
    ${posts.map(PostSummaryItem).join('\n')}
</ul>
`
;console.log(`loaded module: ${import.meta.url}`)