import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Aboutpage from "./pages/AboutPage";
import ArtilcePage from "./pages/ArtilcePage";
import ArticleListPage from "./pages/ArticleListPage";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/about" component={Aboutpage} />
            <Route path="/articles-list" component={ArticleListPage} />
            <Route path="/article/:name" component={ArtilcePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
