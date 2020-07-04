import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/layout/Navbar";
import DashBoard from "./Components/dashboard/Dashboard";
import ProjectDetail from "./Components/projects/ProjectDetail";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import CreateProject from "./Components/projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/project/:id" component={ProjectDetail} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
