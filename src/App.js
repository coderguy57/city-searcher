import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Cities from "./components/city/Cities";
import NotFound from "./components/pages/NotFound";

// Renders the header and then a page depending on url
const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/cities/:search" component={Cities} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
