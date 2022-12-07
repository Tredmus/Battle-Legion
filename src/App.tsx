import "./Styles/main.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { History } from "./Pages/History/History";
import { People } from "./Pages/People/People";
import { Structure } from "./Pages/Structure/Structure";
import { Media } from "./Pages/Media/Media";
import { Invite } from "./Pages/Invite/Invite";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState(true);

  return (
    <>
      <HashRouter>
        <div className="App">
          <div className="wrapper">
            <Header setNav={setActiveNav} />
            <Navbar isActive={activeNav} setNav={setActiveNav} />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
                <Route path="/people" element={<People />} />
                <Route path="/structure" element={<Structure />} />
                <Route path="/media" element={<Media />} />
                <Route path="/invite" element={<Invite />} />
              </Routes>
            </div>
          </div>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
