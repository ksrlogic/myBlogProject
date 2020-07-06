import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Aboutpage from "./pages/AboutPage";
import ArtilcePage from "./pages/ArtilcePage";
import ArticleList from "./pages/Ariclelist";
import NavBar from "./NavBar";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={Aboutpage} />
          <Route path="/articles-list" component={ArticleList} />
          <Route path="/article" component={ArtilcePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
