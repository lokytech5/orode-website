import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./shared/navigation/Navigation";
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import AboutUsPage from "./pages/AboutUsPage";
import ServicePage from "./pages/ServicePage";
import LoginUserPage from "./pages/LoginUserPage";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Router>
        <Box>
          <Navigation />
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/catalog' Component={CatalogPage} />
            <Route path='/about-us' Component={AboutUsPage} />
            <Route path='/services' Component={ServicePage} />
            <Route path='/login' Component={LoginUserPage} />
          </Routes>
        </Box>
      </Router>

    </>
  );
}

export default App;
