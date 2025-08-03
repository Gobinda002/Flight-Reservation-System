import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Searching from './components/Searching'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Booking from './pages/booking'


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="font-sans">
        <HeroSection />
        <Searching />
      </div>
    ),
  },
  {
    path: "/booking.jsx",
    element: <Booking />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}