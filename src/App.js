import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import './styles/computed.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {
    HelloWorld,
    Labs,
    Tuiter,
    HomeScreen,
    ExploreScreen,
    UnderConstruction
} from "./components/index.js";
import Profile from "./components/Tuiter/ProfileComponents/Profile";
import EditProfile from "./components/Tuiter/ProfileComponents/EditProfile";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path={'/'} element={<Labs/>} >
                        <Route path="labs" element={<Labs/>}/>
                        <Route path="hello" element={<HelloWorld/>}/>
                        <Route path={'tuiter'} element={<Tuiter/>}>
                            <Route index path={'explore'} element={<ExploreScreen/>}/>
                            <Route path={'home'} element={<HomeScreen/>}/>
                            <Route path={'notifications'} element={<UnderConstruction name={'notifications'}/>}/>
                            <Route path={'messages'} element={<UnderConstruction name={'messages'}/>}/>
                            <Route path={'bookmarks'} element={<UnderConstruction name="bookmarks"/>}/>
                            <Route path={'lists'} element={<UnderConstruction name="lists"/>}/>
                            <Route path={'profile'} element={<Profile/>}/>
                            <Route path={'edit-profile'} element={<EditProfile/>}/>
                            <Route path={'more'} element={<UnderConstruction name="more"/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App;

