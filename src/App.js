import React from "react";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const searchState = useSelector((state) => state.show_search);

  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <NavBar />
            <Carousel />
            {searchState && <Search />}
            <Homepage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
