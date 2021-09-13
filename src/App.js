import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import HomePage from "./components/Router/HomePage";
import FavoritePage from "./components/Router/FavoritePage";
import Appbar from "./components/UI/Appbar";



function App() {
    return (
        <div>
            <Appbar/>
            <Router>
                <Switch>
                    <Route path={'/home'}>
                        <HomePage/>
                    </Route>
                    <Route path={'/favorites'}>
                        <FavoritePage/>
                    </Route>
                    <Redirect to={'/home'}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
