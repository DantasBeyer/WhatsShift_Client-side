import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login";
import Dashboard from "./assets/components/Dashboard";
import Dienstplan from "./assets/components/Dienstplan";
import Zeiterfassung from "./assets/components/Zeiterfassung";
import Verfügbarkeit from "./assets/components/Verfügbarkeit";
import UserProfile from "./assets/components/UserProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Login} />
        <Route path="dashboard" exact Component={Dashboard} />
        <Route path="dienstplan" exact Component={Dienstplan} />
        <Route path="/zeiterfassung" component={Zeiterfassung} />
        <Route path="/verfügbarkeit" component={Verfügbarkeit} />
        <Route path="/user-profile" component={UserProfile} />
      </Routes>
    </Router>
  );
};

export default App;
