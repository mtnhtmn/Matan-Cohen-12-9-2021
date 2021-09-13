import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from "@material-ui/core";
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./Store/reducers/rootReducer";
import {Provider} from "react-redux";
import {logger} from "redux-logger/src";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk, logger)
    ))


ReactDOM.render(
    <Provider store={store}>
        <CssBaseline/>
        <App/>
    </Provider>,
    document.getElementById('root')
);
