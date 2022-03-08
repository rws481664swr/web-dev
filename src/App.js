import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Tuiter,HelloWorld,Labs} from "./components";
import {ExploreScreen,HomeScreen,UnderConstruction} from './components/Tuiter/Screens'
import Test from './components/Tuiter/ExploreScreen/ExploreComponent'
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", '/labs']} exact={true} component={Labs}/>

                <Route path={"/hello"} exact={true} component={HelloWorld}/>


                <Route path={"/tuiter"} exact={true} component={Tuiter}/>


                <Route path={"/tuiter/explore"} exact={true}   component={ExploreScreen}/>
                <Route path={"/tuiter/home"} exact={true} component={ HomeScreen} />


                <Route path={"/test"} exact={true} component={Test } />




                {/*Dummy Routes*/}
                {
                    ['notifications','bookmarks', 'messages' ,'lists', 'profile', 'more']
                         .map(pagename=>
                        <Route key={`route-${pagename}`} path={`/tuiter/${pagename}` }>
                            <UnderConstruction name={pagename}/>
                        </Route>)
                }



            </div>
        </BrowserRouter>
    );
}

//{/*<Route path={['/hello']} exact={true} element={<HelloWorld/>}/>*/}

//                  {/*<Route path={['/tuiter']} exact={true} element={<Tuiter />}/>*/}

export default App;
