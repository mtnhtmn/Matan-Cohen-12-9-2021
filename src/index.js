import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux";
import {logger} from "redux-logger/src";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk, logger)
    ))


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
