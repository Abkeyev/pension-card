import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation, Footer } from "./components";
import {
  MainPage,
  BusinessPage,
  CreditsRestructuringPage,
  CreditingPage,
  OpenCurrentAccountPage,
  CurrencyPage,
  ContactsPage,
  BranchesPage,
  CallCenterPage,
  NewsPage,
  BaspanaHitPage,
  FaqPage,
  p2pPage,
  CarCreditPage,
  DetailsPage,
} from "./pages/";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/business" component={BusinessPage} />
        <Route
          exact
          path="/credits-restructuring"
          component={CreditsRestructuringPage}
        />
        <Route exact path="/crediting" component={CreditingPage} />
        <Route
          exact
          path="/open-current-account"
          component={OpenCurrentAccountPage}
        />
        <Route exact path="/currency" component={CurrencyPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route exact path="/branches" component={BranchesPage} />
        <Route exact path="/call-center" component={CallCenterPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/baspana-hit" component={BaspanaHitPage} />
        <Route exact path="/faq" component={FaqPage} />
        <Route exact path="/p2p" component={p2pPage} />
        <Route exact path="/details" component={DetailsPage} />
        <Route exact path="/car-credit" component={CarCreditPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
