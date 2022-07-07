import React, { useEffect } from "react";
import "./App.css";
import Throwback from "./Components/Throwback";
import Trending from "./Pages/Trending";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AttackonTitan from "./WeeklyTrend/AttackonTitan";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      // mirror: true,
      offset: 120,
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/attackontitan" element={<AttackonTitan />} />
      </Routes>
      <Throwback />
    </div>
  );
}

export default App;
