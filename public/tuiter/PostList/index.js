import posts from "./posts.js"
import PostListItem from "./PostListItem.js";
// style="text-shadow:0px 0px 1px white"
// let css=`-webkit-text-fill-color: transparent; -webkit-text-stroke : white`

export default ()=> `<div>

${posts.map(PostListItem).join('\n')}
</div>
`
//     .fa-tag {
//     text-shadow: 0px 0px 1px red;
//     color: white;
// }