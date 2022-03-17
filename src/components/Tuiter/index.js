import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index.js";
import {whoReducer,navReducer, tuitReducer} from "../../reducers/index.js";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList/index.js";



export {default as UnderConstruction} from './UnderConstruction.js'
export {default as HomeScreen} from './HomeScreen/HomeScreenComponent.js'
export {default as ExploreScreen} from './ExploreScreen/ExploreComponent.js'
export {default as NotificationScreen} from './NotificationScreen/index.js'
const reducers = combineReducers({
    who:whoReducer,
    nav:navReducer,
    tuits:tuitReducer
})
const store = createStore(reducers)
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
