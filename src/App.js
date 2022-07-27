import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  const Homepage = () => (
    <div>
      <div>This is a Homepage</div>
    </div>
  );
  const RentPage = () => (
    <div>
      <div>This is a RentPage</div>
    </div>
  );
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/rent" component={RentPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
