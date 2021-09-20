import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import HomePage from "./router/HomePage";
import FavoritePage from "./router/FavoritePage";
import Appbar from "./components/ui/Appbar";
import Theme from "./components/ui/Theme";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
import {Provider} from "react-redux";

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)))

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Theme>
                    <Appbar/>
                    <Switch>
                        <Route path={'/home'}>
                            <HomePage/>
                        </Route>
                        <Route path={'/favorites'}>
                            <FavoritePage/>
                        </Route>
                        <Redirect to={'/home'}/>
                    </Switch>
                </Theme>
            </Router>
        </Provider>
    );
}

export default App;
