import {icons} from "../common/index.js";

const styling = {
    listGroupItem:"list-group-item d-flex justify-content-between",
    image:"rounded-3",
    circle:{icon:'fa-solid fa-circle',style:""},
    time:"wd-text-grey fw-normal"
}
const PostSummaryItem = (post) => {
    let {topic, userName, time, image, title} = post
    return `

 <li class="${styling.listGroupItem}">
    <!-- LHS -->
    <div class="fw-bold">
        <div class="wd-text-grey fw-normal">
            ${topic}
        </div>
        <div>
            ${userName} ${icons(styling.circle.icon)}
        <span class="${styling.time}"> - ${time}</span>
        </div>
        <div>  
            ${title}
        </div>
    </div>
    <!-- RHS-->
    <img class="${styling.image}" src="${image}" height="100px" width="100px"/>
 
</li>
`


}

export default PostSummaryItem
;console.log(`loaded module: ${import.meta.url}`)
