export default  ({retweets,comments,likes})=>`
<div class="d-flex justify-content-between">
    <div>
    <i class="fa-regular fa-2x fa-comment"></i>
        <span>${comments}</span>
    </div>
    <div>
       <i class="fa-solid  fa-2x fa-retweet"></i>
        <span>${retweets}</span>
    </div>
    <div>
       <i class="fa-regular fa-2x fa-heart"></i>
        <span>${likes}</span>
    </div>
    <div>
        <i class="fa-solid fa-2x fa-arrow-up-from-bracket"></i>
    </div>

</div>
`