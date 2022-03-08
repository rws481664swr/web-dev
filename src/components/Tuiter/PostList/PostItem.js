import {ContentComponent, ReactionComponent, TweetComponent} from './PostListComponents'


function AvatarComponent({src}) {
    // console.log(avatarIcon)
    return (<>
        <img className="me-2 rounded-circle" height="48px" width="48px" src={ src}/>
        </>
    );
}

const PostListItem = ({post:{type, avatarIcon, tweet, image, content, meta}}) => {
    return (
        <>
            <div className=" d-flex justify-content-start ps-2 pt-2 pe-1 pb-1 ms-4 me-2 wd-border-1px ">
            <AvatarComponent src={avatarIcon}/>
                <div className='me-2'>
                    <TweetComponent tweet={tweet}/>
                    <ContentComponent data={{image, content}}/>
                    <ReactionComponent reactions={meta}/>
                </div>
            </div>

        </>
    )
}

export default PostListItem