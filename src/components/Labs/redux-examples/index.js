import React from "react";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import HelloReduxExampleComponent from "./hello-redux-example-component.js";
import hello from "./reducers/hello.js";
import todos from "./reducers/todos-reducer.js";
import Todos from "./todo-component";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);
const ReduxExamples = () => {
    return (

        <Provider store={store}>

            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>

            </div>

        </Provider>
    );
};
export default ReduxExamples;