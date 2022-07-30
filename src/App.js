import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Character from "./pages/home/characterPage/Character";
import Favourite from "./pages/home/favorite/Favourite";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorite" element={<Favourite />} />
        <Route path="/character" element={<Character />} />
        {/* <Route path="about" element={<About />} /> */}

      </Routes>
    </div>
  );
}

export default App;