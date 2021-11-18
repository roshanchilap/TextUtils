import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          title="TextUtils"
          aboutTextUtils="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div>
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter a text to analyze." />}
            ></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
