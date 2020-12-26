import './App.scss';
import UserNamePage from "./Pages/UserNamePage";
import "./scss/UserNamePage.scss";
import "./scss/common.scss";
import UserPhysicInfo from "./Pages/UserPhysicInfo";
import React from "react";
import {UserDataProvider} from "./components/UserData";
import MainPage from "./Pages/MainPage";
import {Form01} from "./components/InputForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
   return (
    <Router>
        <div className="App">
        <Link to={
          {
            pathname: "/UserPhysicInfo"
          }
        }>

        </Link>
          <Switch>
            <Route exact path="/" component={UserNamePage}/>
            <Route path="/UserPhysicInfo" component={UserPhysicInfo}/>
            <Route path="/MainPage" component={MainPage}/>
          </Switch>
        </div>
    </Router>
  );
}
export default App;