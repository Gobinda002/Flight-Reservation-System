import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchUI() {
  const [mode, setMode] = useState("oneway");
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg,#38BDF8 0%,#b08f4a 55%,#f9c15c 100%)",
      }}
    >
      {/* Search card */}
      <div className="flex-1 flex items-start justify-center pt-50 pb-24">
        <div className="bg-[#d9d9d9] max-w-3xl w-full mx-auto rounded-md py-8 px-10 relative">
          {/* Toggle */}
          <div className="flex justify-between mb-6">
            <div
              onClick={() => setMode("oneway")}
              className={`cursor-pointer px-8 py-2 rounded-full text-white text-sm font-medium tracking-wide ${
                mode === "oneway"
                  ? "bg-[#e97778]"
                  : "bg-[rgba(240,176,174,0.3)]"
              }`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              One Way
            </div>
            <div
              onClick={() => setMode("roundtrip")}
              className={`cursor-pointer px-8 py-2 rounded-full text-white text-sm font-medium tracking-wide ${
                mode === "roundtrip"
                  ? "bg-[#e97778]"
                  : "bg-[rgba(240,176,174,0.3)]"
              }`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              Two Way
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label
                  className="block text-xs mb-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  From :
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b-2 border-black focus:outline-none text-lg pb-1 px-2"
                  style={{ fontFamily: "Georgia, serif" }}
                  placeholder=""
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  To :
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b-2 border-black focus:outline-none text-lg pb-1 px-2"
                  style={{ fontFamily: "Georgia, serif" }}
                  placeholder=""
                />
              </div>
              <div>
                <label
                  className="block text-xs mb-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Depart
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-0 border-b-2 border-black focus:outline-none text-lg pb-1"
                />
              </div>
              {mode === "roundtrip" && (
                <div>
                  <label
                    className="block text-xs mb-1"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Return
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-0 border-b-2 border-black focus:outline-none text-lg pb-1"
                  />
                </div>
              )}
              <div className="md:col-span-2">
                <label
                  className="block text-xs mb-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Passenger
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full bg-transparent border-0 border-b-2 border-black focus:outline-none text-lg pb-1"
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={() => navigate("booking")}
                className="bg-[#e97778] text-white px-10 py-3 rounded-lg text-xl tracking-wider font-semibold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                FIND FLIGHTS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
