import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./shared/navigation/Navigation";
import { Box } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { setAuthenticated } from "./redux/reduxActions/authActions";

import ContentContainer from './theme/ContentContainer'

import HomePage from './pages/HomePage'
import GalleryPage from "./pages/GalleryPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicePage from "./pages/ServicePage";
import LoginUserPage from "./pages/LoginUserPage";
import DashBoardPage from "./pages/DashBoardPage";
import RegisterUserPage from "./pages/RegisterUserPage";
function App() {
  const dispatch = useDispatch();

  //*Checking token in loca storage when app loads and set isAuthenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setAuthenticated(true));
    }
  }, [dispatch]);


  return (
    <>
      <Router>
        <Box>
          <Navigation />
          <ContentContainer>
            <Routes>
              <Route path='/' Component={HomePage} />
              <Route path='/gallery' Component={GalleryPage} />
              <Route path='/about-us' Component={AboutUsPage} />
              <Route path='/services' Component={ServicePage} />
              <Route path='/login' Component={LoginUserPage} />
              <Route path='/dasboard' Component={DashBoardPage} />
              <Route path='/register' Component={RegisterUserPage} />
            </Routes>
          </ContentContainer>
        </Box>
      </Router>

    </>
  );
}

export default App;
