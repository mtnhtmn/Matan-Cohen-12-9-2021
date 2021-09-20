import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import HomePage from "./router/HomePage";
import FavoritePage from "./router/FavoritePage";
import Appbar from "./components/ui/Appbar";
import Theme from "./components/ui/Theme";


function App() {
    return (
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
    );
}

export default App;
