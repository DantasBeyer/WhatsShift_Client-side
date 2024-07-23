import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login";
import Dashboard from "./assets/components/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="dashboard" exact Component={Dashboard} />
      </Routes>
    </Router>
  );
};

export default App;
