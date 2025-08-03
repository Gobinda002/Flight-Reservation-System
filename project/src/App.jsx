import { useState } from 'react'
import HeroSection from './components/HeroSection'
import Searching from './components/Searching'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import booking from './pages/booking'


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
    path: "/results",
    element: <booking />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}