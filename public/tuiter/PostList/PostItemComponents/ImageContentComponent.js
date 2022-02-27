export default ({src}, {title, text, link}) => `

<div class="wd-border-1px wd-rounded-all">
<img  class="wd-border-round-top-only wd-bottom-border-gray" src="${src}"  width="100%" height="auto" />
<div class="wd-text-grey p-2 m-2">
<div class="text-white  ">${title}</div>
<div>${text}</div>
<a style="color:grey" href="${link}"><i class="fa fa-link"></i> netflix.com</a>
</div>
</div>
`