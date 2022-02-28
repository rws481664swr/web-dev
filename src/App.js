// import './vendors/bootstrap/css/bootstrap.min.css';
// import './vendors/bootstrap/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import {BrowserRouter, Route } from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import Labs from "./components/Labs";
import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/Tuiter";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                    <Route path={["/",'/labs']} exact={true}>
                        <Labs/>
                    </Route>
                    <Route path={"/hello"} exact={true}>
                        <HelloWorld/>
                    </Route>
                    <Route path={"/tuiter"} exact={true}>
                        <Tuiter/>
                    </Route>
                <Route path={["/", '/labs']} exact={true} component={Labs}/>
                <Route path={"/hello"} exact={true} component={HelloWorld}/>
                <Route path={"/tuiter"} exact={true} component={Tuiter}/>

            </div>
        </BrowserRouter>
    );
}

//{/*<Route path={['/hello']} exact={true} element={<HelloWorld/>}/>*/}

//                  {/*<Route path={['/tuiter']} exact={true} element={<Tuiter />}/>*/}

export default App;
