import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import LoginPage from "./pages/login/login.component";
import SignupPage from "./pages/signup/signup.component";
import Footer from "./components/footer/footer.component";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/sign-up" component={SignupPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
