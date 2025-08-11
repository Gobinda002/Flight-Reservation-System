import { useState } from "react";
import HeroSection from "./pages/HeroSection";
import Searching from "./pages/Searching";
import Result from "./pages/result";
import Selected from './pages/selected'; 
import Login from "./pages/login";
import Register from "./pages/register";   
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Searching />
            </div>
          }
        />
        <Route path="/selected" element={<Selected />} />  {/* Correct URL path */}
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}
