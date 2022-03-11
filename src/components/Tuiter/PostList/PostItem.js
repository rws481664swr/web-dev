import {ContentComponent, ReactionComponent, TweetComponent} from './PostListComponents'


function AvatarComponent({src}) {
    return (<>
        <img className={`m-2  rounded-circle`}height="48px" width="48px" src={ src} alt={ src}/>
        </>
    );
}

const PostListItem = ({post:{type, avatarIcon, tweet, image, content, meta}}) => {
    return (
        <>
            <div className=" d-flex justify-content-start  ms-4 me-2 wd-border-1px ">
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