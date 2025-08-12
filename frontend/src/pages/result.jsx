// src/pages/result.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Card  from '../components/card';

const sampleFlightsTwoWay = [
  {
    departDate: "June 10, 2023",
    departFrom: "London Stansted (STN)",
    departTime: "10:45",
    arriveAt: "Stockholm Arlanda (ARN)",
    arriveTime: "13:55",
    duration: "2 h 10 m",
    returnDate: "August 18, 2023",
    returnFrom: "Stockholm Arlanda (ARN)",
    returnTime: "16:20",
    returnArriveAt: "London Stansted (STN)",
    returnArriveTime: "17:55",
    price: "$50",
  },
  {
    departDate: "June 10, 2023",
    departFrom: "London Stansted (STN)",
    departTime: "11:45",
    arriveAt: "Stockholm Arlanda (ARN)",
    arriveTime: "14:55",
    duration: "2 h 10 m",
    returnDate: "August 18, 2023",
    returnFrom: "Stockholm Arlanda (ARN)",
    returnTime: "17:20",
    returnArriveAt: "London Stansted (STN)",
    returnArriveTime: "18:55",
    price: "$62",
  },
];

const sampleFlightsOneWay = [
  {
    departDate: "June 10, 2023",
    departFrom: "London Stansted (STN)",
    departTime: "10:45",
    arriveAt: "Stockholm Arlanda (ARN)",
    arriveTime: "13:55",
    duration: "2 h 10 m",
    price: "$30",
  },
  {
    departDate: "June 11, 2023",
    departFrom: "London Stansted (STN)",
    departTime: "09:30",
    arriveAt: "Stockholm Arlanda (ARN)",
    arriveTime: "12:40",
    duration: "2 h 10 m",
    price: "$35",
  },
];

export default function Result() {
  const location = useLocation();
  const {
    mode = "one-way", // "one-way" or "round-trip"
    from = "London Stansted",
    to = "Stockholm",
    depart = "10/06/2023",
    return: ret = "18/08/2023",
    passengers = 1,
  } = location.state || {};

  const isRoundTrip = mode === "round-trip";
  const sampleFlights = isRoundTrip ? sampleFlightsTwoWay : sampleFlightsOneWay;

return (
  <div className="min-h-screen bg-gradient-to-br from-teal-500 via-white/5 to-green-400 relative overflow-hidden">
    <Navbar />

    <div className=" max-w-7xl mx-auto bg-white rounded-2xl shadow mt-40 overflow-hidden px-6 py-8 flex flex-col md:flex-row gap-6">
      
      {/* Sidebar search */}
      <div className="md:w-1/4 bg-white rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">Your Search</h2>

        {/* Input fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">From</label>
            <input
              value={from}
              readOnly
              className="w-full bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">To</label>
            <input
              value={to}
              readOnly
              className="w-full bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Departure</label>
            <input
              value={depart}
              readOnly
              className="w-full bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {isRoundTrip && (
            <div>
              <label className="block text-sm font-medium mb-1">Return</label>
              <input
                value={ret}
                readOnly
                className="w-full bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Passengers</label>
            <input
              value={passengers}
              readOnly
              className="w-full bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          <button className="w-full mt-2 bg-black text-white py-2 rounded-md text-sm">
            Change Search
          </button>
        </div>
      </div>

      {/* Results list */}
      <Card sampleFlights={sampleFlights} isRoundTrip={isRoundTrip} />
    </div>
  </div>
);


}
