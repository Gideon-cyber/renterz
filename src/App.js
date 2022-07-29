import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import Footer from "./components/footer/footer.component";

function App() {
  const RentPage = () => (
    <div>
      <div>This is a RentPage</div>
    </div>
  );
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rent" component={RentPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
