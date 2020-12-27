import './App.scss';
import "./scss/UserNamePage.scss";
import "./scss/common.scss";
import UserPhysicInfo from "./Pages/UserPhysicInfo";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
   return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/UserPhysicInfo" component={UserPhysicInfo}/>
          </Switch>
        </div>
    </Router>
  );
}
export default App;