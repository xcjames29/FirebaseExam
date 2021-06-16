
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Login from "./Login";
import Display from "./Display";


export default function Main(){

    return(
    <Router> 
        <Switch>
            <Route exact path="/" >
                <Login />
            </Route>
            <Route path="/display" >
                <Display />
            </Route>
        </Switch>
    </Router>
    )
}