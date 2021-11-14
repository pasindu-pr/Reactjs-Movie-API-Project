import React, { useRef, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const searchState = useSelector((state) => state.show_search);

  const latestItemRef = useRef();
  const nowPlayingItemRef = useRef();
  const trendingItemRef = useRef();

  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <NavBar
              latestItemRef={latestItemRef}
              nowPlayingItemRef={nowPlayingItemRef}
              trendingItemRef={trendingItemRef}
            />
            <Carousel />
            {searchState && (
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            )}
            <Homepage
              searchTerm={searchTerm}
              latestItemRef={latestItemRef}
              nowPlayingItemRef={nowPlayingItemRef}
              trendingItemRef={trendingItemRef}
            />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
