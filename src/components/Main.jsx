
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Login from "./Login";

export default function Main(){

    return(
    <Router> 
        <Switch>
            <Route exact path="/" >
                <Login />
            </Route>
            <Route path="/storage" >
                
            </Route>
        </Switch>
    </Router>
    )
}