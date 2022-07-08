import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Throwback from "./Components/Throwback";
import AttackonTitan from "./WeeklyTrend/AttackonTitan";
import AOS from "aos";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
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
