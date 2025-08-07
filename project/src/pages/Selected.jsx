import React from "react";
import { useLocation } from "react-router-dom";

export default function Selected() {
  const location = useLocation();
  const { flight, isRoundTrip } = location.state || {};

  if (!flight) {
    return <div className="p-6">No flight selected.</div>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Selected Flight Details</h1>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <strong>Departure:</strong> {flight.departDate} at {flight.departTime} from {flight.departFrom}
        </div>
        <div>
          <strong>Arrival:</strong> {flight.arriveTime} at {flight.arriveAt}
        </div>
        {isRoundTrip && (
          <>
            <div>
              <strong>Return:</strong> {flight.returnDate} at {flight.returnTime} from {flight.returnFrom}
            </div>
            <div>
              <strong>Return Arrival:</strong> {flight.returnArriveTime} at {flight.returnArriveAt}
            </div>
          </>
        )}
        <div>
          <strong>Price:</strong> {flight.price}
        </div>
      </div>
    </div>
  );
}
