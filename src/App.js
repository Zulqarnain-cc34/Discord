import React from "react";
import { Counter } from "./features/Counter";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/login">
            <Login />
          </Route>
          <Route to="/">
            <Sidebar />
            <Chat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
