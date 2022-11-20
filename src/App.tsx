import React from "react";
import "./Styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { History } from "./Pages/History/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="wrapper">
            <Navbar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
