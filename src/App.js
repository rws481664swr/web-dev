import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import React from 'react'
// import * as rr from "react-router";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HelloWorld, Labs, Tuiter} from "./components/index.js";
import {HomeScreen, ExploreScreen, UnderConstruction} from './components/Tuiter/Screens.js'

function App() {

    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path={'/'} exact={true} element={<Labs/>}/>

                    <Route path={"/hello"} exact={true} element={<HelloWorld/>}/>


                    <Route path={"/tuiter"} exact={true} element={<Tuiter/>}/>


                    <Route path={"/tuiter/explore"} exact={true} element={ExploreScreen}/>
                    <Route path={"/tuiter/home"} exact={true} element={<HomeScreen/>}/>


                    {/*Dummy Routes*/}
                    {
                        ['notifications', 'bookmarks', 'messages', 'lists',  'profile', 'more']
                            .map(pagename =>
                                <Route key={`route-${pagename}`} path={`/tuiter/${pagename}`}
                                       element={<UnderConstruction name={pagename}/>}/>
                            )
                    }

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
