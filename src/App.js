import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Cities from "./components/city/Cities";
import NotFound from "./components/pages/NotFound";
import SearchProvider from "./context/SearchProvider";

// Renders the header and then a page depending on url
const App = () => (
  <SearchProvider>
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search/:search" component={Cities} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  </SearchProvider>
);

export default App;
