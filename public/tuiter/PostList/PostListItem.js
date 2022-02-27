import ImageContentComponent from './PostItemComponents/ImageContentComponent.js'
import ImageComponent from './PostItemComponents/ImageComponent.js'
import  Reactions from './PostItemComponents/Reactions.js'

const tweetPart = ({userName, text, handle, time}) => `
   <div>
              <span class="fw-bold text-white ">  ${userName} </span>
              <span style="padding:0;border:0;margin:0;" class="fa-stack ">
              <i style="" class="fa-solid fa-certificate fa-stack-1x text-white"></i>
              <i style=""   class="fa-solid fa-check   fa-stack-1x  text-black"></i>

              </span> 
                       
                </div>
                 <span class="wd-text-grey fw-normal"> 
                            ${handle} - ${time} 
                        </span>
                <div>
                ${text}
                </div>
`


export default (post) => `
<div  class="d-flex justify-content-start wd-border-1px ">
    <div class="m-2">
    <img   class=" rounded-circle" height="48px" width="48px" src="${post. avatarIcon}"/>
       </div> 
    <div> 
    <div class="m-2">
         ${tweetPart( post.tweet)}
    </div>
    <div class="wd-border-width-1 wd-grey-border me-4">
    ${
    (({image, content, type}) => {
        switch (type) {
            case "tweet-content":
                return ImageContentComponent(image, content)
            case "tweet-image":
                return ImageComponent(image)
            default:
                return 'Error parsing JSON';
        }
    })(post)
}
<!--        <img class=" ${post.image.style}" width="100%" height="auto" src="${post.image.src}"/>-->
    </div>
    ${Reactions(post.meta)}
    ${''
    //post.content ? postContent(post.content): 
}
       
    ${''
//bottomPart({retweets,comments,likes})
}
    </div>
</div>
`
