import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Character from "./pages/characterPage/Character";
import Favourite from "./pages/favorite/Favourite";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorite" element={<Favourite />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;