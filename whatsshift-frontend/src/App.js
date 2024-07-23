import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Login} />
      </Routes>
    </Router>
  );
};

export default App;
