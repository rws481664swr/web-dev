import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index.js";
import {navReducer, whoReducer} from "./reducers/index.js";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList";

// import HomeScreen from './components/Tuiter/HomeScreen/HomeScreenComponent.js'
// import ExploreScreen from './components/Tuiter/ExploreScreen/ExploreComponent.js'
// import NotificationScreen from './components/Tuiter/NotificationScreen/index.js'
export {default as UnderConstruction} from './UnderConstruction.js'
export {default as HomeScreen} from './HomeScreen/HomeScreenComponent.js'
export {default as ExploreScreen} from './ExploreScreen/ExploreComponent.js'
export {default as NotificationScreen} from './NotificationScreen/index.js'

// const navReducer = (state={}, action)=>{
//     switch(action.type){
//         case 'explore':
//             return{
//                 action:'explore'
//             }
//         default:
//     return    {
//             ...state,
//             action:'home'
//         }
//     }
//   //  switch (action.active){
//   //       case "home":
//   //           return {active:'home'}
//   //       case "explore":
//   //           return {active:'explore'}
//   //       case "profile":
//   //           return {active:'profile'}
//   //       // case "":
//   //       // case "":
//   //       // case "":
//   //       default:
//   //           return {
//   //               type:'nav',
//   //               active:'home'
//   //           }
//   //
//   //   }
//     return state
// }
const reducer = combineReducers({
     who: whoReducer,nav: navReducer
});
const store = createStore(reducer);
// const store = createStore(whoReducer)
// const store = createStore((x,y)=>x)
// const store=createStore(combineReducers({ nav:navReducer,who:whoReducer}))
const Tuiter = () => {
    return (
        <Provider store={store}>

        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Outlet/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
};
export default Tuiter;
