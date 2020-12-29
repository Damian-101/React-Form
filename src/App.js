import './App.scss';
import "./scss/UserNamePage.scss";
import "./scss/common.scss";
import UserPhysicInfo from "./Pages/UserPhysicInfo";
import React from "react";
import MainPage from "./Pages/MainPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
   return (
    <Router>
        <div className="App">
          <Switch>
            <Route  path ="/UserPhysicInfo" component={UserPhysicInfo}/>
            <Route path ="/MainPage" component={MainPage}/>
          </Switch>
        </div>
    </Router>
  );
}
export default App;