import { useState } from "react";
import './css/App.css'
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Save from "./pages/Saved";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Save />} />
        </Routes>
      </main> 
    </div>
  );
}

export default App;
