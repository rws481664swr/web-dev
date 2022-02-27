import {checkedCircle} from "../common/index.js"

const who_to_follow_styling = {
    images: "align-center rounded-circle me-2",
    flex: " d-flex  align-content-start",
    list_group_item_classes: "list-group-item wd-list-group-item-follow d-flex justify-content-between",
    follow_button: "align-self-center btn btn-primary wd-btn-follow  rounded-pill"

}


const WhoToFollowListItem =  (follow_data) => `
<div class="${who_to_follow_styling.list_group_item_classes}">
    <div class="${who_to_follow_styling.flex}">
        <img height="48px" width="48px" class="${who_to_follow_styling.images}" src="${follow_data.avatarIcon}">
            <div class="align-self-center">
                <div><span class="fw-bold">${follow_data.userName}</span> ${checkedCircle()}</div>
                <div class="wd-handle">${follow_data.handle}</div>
            </div>
    </div>
    <button class="${who_to_follow_styling.follow_button}">Follow</button>
</div>
`

export default WhoToFollowListItem
;console.log(`loaded module: ${import.meta.url}`)