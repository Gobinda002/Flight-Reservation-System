import { useState } from "react";
import HeroSection from "./pages/HeroSection";
import Searching from "./pages/Searching";
import Booking from "./pages/booking";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

      <HeroSection />
      <Searching />
      <Booking />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Searching />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div className="font-sans">
//
//       </div>
//     ),
//   },
//   {
//     path: "/booking.jsx",
//     element: <Booking />,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
