import "./App.css";

import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/views/Footer";
import LadingPage from "./components/views/LadingPage";
import LoginPage from "./components/views/LoginPage";
import NavBar from "./components/views/NavBar";
import RegisterPage from "./components/views/RegisterPage";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <NavBar></NavBar>
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <Routes>
            <Route path="/" element={<LadingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
      <Footer></Footer>
    </Suspense>
  );
};

export default App;
