import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Graph from "./components/Graph";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
