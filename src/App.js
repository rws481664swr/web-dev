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
    NotificationScreen,
    UnderConstruction
} from "./components/index.js";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path={'/'} >
                        <Route path="labs" element={<Labs/>}/>
                        <Route path="hello" element={<HelloWorld/>}/>
                        <Route path={'tuiter'} element={<Tuiter/>}>
                            <Route index path={'explore'} element={<ExploreScreen/>}/>
                            <Route path={'home'} element={<HomeScreen/>}/>
                            <Route path={'notifications'} element={<NotificationScreen/>}/>
                            <Route path={'messages'} element={<UnderConstruction name={'messages'}/>}/>
                            <Route path={'bookmarks'} element={<UnderConstruction name="bookmarks"/>}/>
                            <Route path={'lists'} element={<UnderConstruction name="lists"/>}/>
                            <Route path={'profile'} element={<UnderConstruction name="profile"/>}/>
                            <Route path={'more'} element={<UnderConstruction name="more"/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App;
