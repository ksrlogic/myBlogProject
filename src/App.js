import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Homepage} exact />
      </div>
    </Router>
  );
}

export default App;
