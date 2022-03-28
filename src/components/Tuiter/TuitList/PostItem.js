import {ContentComponent, ReactionComponent, TuitContentComponent} from './TuitListComponents/index.js'


function AvatarComponent({src}) {
    return (
        <img className={`m-2  rounded-circle`} height="48px" width="48px" src={ src} alt={ src}/>
    );
}

const TuitListItem = ({tuit,className}) => {
    return (
            <div className={`${className||''}  d-flex  justify-content-start  ms-4 me-2 wd-border-1px `}>
            <AvatarComponent src={tuit['avatar-image']}/>
                <div className={'me-2'}>
                    <TuitContentComponent tuit={tuit}/>
                    <ContentComponent tuit={tuit}/>
                    <ReactionComponent liked={tuit.liked} stats={tuit.stats}/>
                </div>
            </div>
   )
}

export default TuitListItem