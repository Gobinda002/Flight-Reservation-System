import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numall, setNumAllo] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setpass] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let String = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijjklmnopqrstuvwxyz";
    if (numall) str += "0123456789";
    if (char) str += "!@#$%^&*()-_=+|[]{};:/?.>";

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * String.length + 1);
      pass = str.charAt(char);
    }
    setPass(pass);
  }, [length, numall, char, setpass]);

  return (
    <>
      <div className="bg-white w-full max-w-md mx-auto rounded-xl my-8 px-6 py-5 shadow-lg">
        <h1 className="text-4xl text-center font-bold mb-6">
          Password Generator
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <input
            className="border-2 rounded-xl px-3 py-2 text-xl w-full"
            type="text"
            placeholder="Password"
            readOnly
          />
          <button className="bg-amber-400 text-white font-semibold px-4 py-2 rounded-xl hover:bg-amber-500 transition">
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-2">
            <span className="text-lg font-medium">
              Password Length: {length}
            </span>
            <input
              type="range"
              min="8"
              max="16"
              value={length}
              onChange={(e)=>{setlength(e.target.value)}}
              className="w-80 accent-amber-500 cursor-pointer"
            />
          </label>

          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-lg">Include Numbers</span>
          </label>

          <label className="inline-flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <span className="text-lg">Include Special Characters</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
