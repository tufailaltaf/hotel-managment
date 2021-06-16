import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUpSide from './pages/SignUp'
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUpSide} />
        <Route exact path="/profile" component={Profile} />

      



        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
