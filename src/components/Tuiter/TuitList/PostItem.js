import {ContentComponent, ReactionComponent, TuitContentComponent} from './TuitListComponents/index.js'
import {useDispatch} from "react-redux";


// function AvatarComponent({src}) {
//     return (
//         <img className={`m-2  rounded-circle`} height="48px" width="48px" src={src} alt={src}/>
//     );
// }

// const TuitListItem = ({tuit, className}) =>null //{
    // const dispatch = useDispatch()
    // const deleteTuite = (tuit)=> dispatch ({type:'delete-tuit', tuit})
    // return (
    //     <div className={`${className || ''}  d-flex  justify-content-start  ms-4 me-2 wd-border-1px `}>
    //         <AvatarComponent src={tuit['avatar-image']}/>
    //         <div className={'me-2'}>
    //             <TuitContentComponent tuit={tuit}/>
    //             <ContentComponent tuit={tuit}/>
    //             <ReactionComponent tuit={tuit}/>
    //         </div>
    //         <i onClick={() => deleteTuite(tuit)} className="fas fa-remove  fa-pull-right"/>
    //     </div>
//     )
// }

// export default TuitListItem