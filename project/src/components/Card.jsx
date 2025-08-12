import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ sampleFlights, isRoundTrip }) => {
  const navigate = useNavigate();

  const handleSelect = (flight) => {
    navigate('/selected', { state: { flight, isRoundTrip } });
  };

  return (
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
                    <div className="text-4xl font-semibold">{flight.returnArriveTime}</div>
                    <div className="text-xs text-gray-500">{flight.returnArriveAt}</div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="w-full md:w-56 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col justify-center items-center p-6">
            <div className="text-3xl font-bold mb-2">{flight.price}</div>
            <button
              onClick={() => handleSelect(flight)}
              className="bg-teal-600 text-white px-5 py-3 rounded-md text-sm font-medium"
            >
              Select this flight
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
