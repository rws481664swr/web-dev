export default ({retweets, comments, likes}) => `
<div class=" d-flex   justify-content-start fw-light m-3  wd-text-grey pe-4 ">
    <div class="d-flex justify-content-evenly">   <!--d-flex justify-content-evenly-->
        <span class="  ms-0 p- me-4 ">
            <i    class="   wd-pe6 fa-regular   fa-comment"></i>
            <span  class="wd-ps-6 wd-pe6 ">${comments}</span>
        </span>
        
        <span class=" ms-4 me-4 ">
           <i  class="  wd-ps-6 wd-pe6  fa-solid    fa-retweet"></i>
            <span class="wd-ps-6 wd-pe6 ">${retweets}</span>
        </span>
        
        <span class=" ms-4 me-4 ">
           <i   class="wd-ps-6 wd-pe6  fa-regular   fa-heart"></i>
            <span class="wd-ps-6 wd-pe6 ">${likes}</span>
        </span>
        
        <span class=" ms-4  ">
            <i class="fa-solid   fa-arrow-up-from-bracket"></i>
        </span>
    </div>
    <div ></div>
</div>
`