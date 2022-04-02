
import  ContentComponent from './PostContentComponent/index.js'
import ReactionComponent from './ReactionComponent.js'
import TuitContentComponent from './PostContentComponent/TuitContentComponent.js'
export {
    ContentComponent,
    ReactionComponent,
    TuitContentComponent
}

export function AvatarComponent({src}) {
    return (
        <img className={`m-2  rounded-circle`} height="48px" width="48px" src={src} alt={src}/>
    );
}