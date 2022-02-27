export default ({retweets, comments, likes}) => `
<div class="    fw-light m-3  wd-text-grey pe-4 ">
    <div class="d-flex justify-content-between ">   
        <div>
        <i class="fa-regular   fa-comment"></i>
            <span>${comments}</span>
        </div>
        <div>
           <i class="fa-solid    fa-retweet"></i>
            <span>${retweets}</span>
        </div>
        <div>
           <i class="fa-regular   fa-heart"></i>
            <span>${likes}</span>
        </div>
        <div>
            <i class="fa-solid   fa-arrow-up-from-bracket"></i>
        </div>
    </div>
</div>
`