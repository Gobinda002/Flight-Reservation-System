// src/pages/result.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';

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
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-white/5 to-green-400">
      <div className="max-w-7xl mx-auto relative">
        {/* Transparent navbar overlapping, absolute so background shows through */}
        <div className="absolute inset-x-0 top-0 z-30">
          <Navbar />
        </div>

        {/* White panel below; padding-top makes room for the overlapping navbar */}
        <div className="bg-white rounded-2xl shadow overflow-hidden mt-6">
          <div className="flex flex-col md:flex-row gap-6 px-6 py-8 pt-24">
            {/* Sidebar search */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="text-lg font-semibold mb-4">Your Search</div>
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
            </div>

            {/* Results list */}
            <div className="flex-1 space-y-6">
              <div className="flex justify-between items-start">
                <div className="text-gray-500 text-sm">
                  Sort by: Lowest Price ({isRoundTrip ? "Round-trip" : "One-way"})
                </div>
              </div>

              {sampleFlights.map((flight, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow flex flex-col md:flex-row overflow-hidden"
                >
                  <div className="flex-1 p-6">
                    {/* Departure */}
                    <div className="text-sm text-gray-500 mb-2">
                      {flight.departDate} – Departure
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-semibold">{flight.departTime}</div>
                        <div className="text-xs text-gray-500">{flight.departFrom}</div>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="text-yellow-500 text-2xl">✈️</div>
                        <div className="text-xs">{flight.duration}</div>
                        <div className="h-px w-20 bg-gray-200 my-2" />
                      </div>
                      <div>
                        <div className="text-4xl font-semibold">{flight.arriveTime}</div>
                        <div className="text-xs text-gray-500">{flight.arriveAt}</div>
                      </div>
                    </div>

                    {/* Return - only if round-trip */}
                    {isRoundTrip && (
                      <>
                        <div className="mt-6 text-sm text-gray-500 mb-2">
                          {flight.returnDate} – Return
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-4xl font-semibold">{flight.returnTime}</div>
                            <div className="text-xs text-gray-500">{flight.returnFrom}</div>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <div className="text-yellow-500 text-2xl">✈️</div>
                            <div className="text-xs">{flight.duration}</div>
                            <div className="h-px w-20 bg-gray-200 my-2" />
                          </div>
                          <div>
                            <div className="text-4xl font-semibold">
                              {flight.returnArriveTime}
                            </div>
                            <div className="text-xs text-gray-500">{flight.returnArriveAt}</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="w-full md:w-56 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center items-center p-6">
                    <div className="text-3xl font-bold mb-2">{flight.price}</div>
                    <button className="bg-teal-600 text-white px-5 py-3 rounded-md text-sm font-medium">
                      Select this flight
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
