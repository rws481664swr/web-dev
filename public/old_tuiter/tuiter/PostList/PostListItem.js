import ImageContentComponent from './PostItemComponents/ImageContentComponent.js'
import ImageComponent from './PostItemComponents/ImageComponent.js'
import  Reactions from './PostItemComponents/Reactions.js'
import  TweetComponent from './PostItemComponents/TweetComponent.js'



export default (post) => `
<div  class=" d-flex justify-content-start ps-2 pt-2 pe-1 pb-1 ms-4 me-2 wd-border-1px ">
    <div class="m-2">
    <img   class=" rounded-circle" height="48px" width="48px" src="${post. avatarIcon}"/>
       </div> 
    <div> 
    <div class="m-2">
         ${TweetComponent( post.tweet)}
    </div>
    <div class="wd-border-width-1 wd-grey-border me-2">
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
