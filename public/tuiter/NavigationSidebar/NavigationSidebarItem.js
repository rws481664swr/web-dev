import {icons} from '../common/index.js'

export default (active)=>(e)=> {
    let id=e.text.trim().toLowerCase()
    return `<a 
        id="wd-sidebar-${id}" 
        class="${id===active? 'wd-active-side-nav':''} list-group-item d-flex justify-content-start " 
        href="${e.href}"
    >
    <div>${icons(e.fa_classes, "pe-2")}</div>
    <span class="d-none  d-xl-block "> ${e.text} </span>
</a>`
}
console.log(`loaded module: ${import.meta.url}`)