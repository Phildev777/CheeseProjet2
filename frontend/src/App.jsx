import React, { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Proptypes from "prop-types";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Fromages from "./pages/Fromages";
import Recettes from "./pages/Recettes";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/Fromages" element={<Fromages />} />
            <Route exact path="/Recettes" element={<Recettes />} />
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </div>
  );
}

function Wrapper({ children }) {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location]);

  return <div>{children}</div>;
}
Wrapper.propTypes = {
  children: Proptypes.func.isRequired,
};

export default App;
