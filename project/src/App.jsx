import { useState } from "react";
import HeroSection from "./pages/HeroSection";
import Searching from "./pages/Searching";
import Result from "./pages/result";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* root shows HeroSection + Searching together */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <Searching />
            </div>
          }
        />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}