import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Zeiterfassung = () => {
  const [entries, setEntries] = useState([]);
  const [startTime, setStartTime] = useState(""); // Zustand für Startzeit
  const [endTime, setEndTime] = useState(""); // Zustand für Endzeit
  const navigate = useNavigate(); // Hook für Navigation

  //  Zeiterfassungseintrags Hinzufügen
  const handleAddEntry = () => {
    if (startTime && endTime) {
      setEntries([...entries, { startTime, endTime }]); // Neuen Eintrag hinzufügen
      setStartTime(""); // Zurücksetzen Startzeit
      setEndTime(""); // Zurücksetzen  Endzeit
    } else {
      alert("Please fill in both start and end times.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Zeiterfassung</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startTime"
          >
            Start Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startTime"
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="endTime"
          >
            End Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endTime"
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mb-4"
          onClick={handleAddEntry}
        >
          Add Entry
        </button>
        <h2 className="text-xl font-bold mb-2">Entries</h2>
        {entries.length === 0 ? (
          <p>No entries added.</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} className="bg-white shadow-md rounded p-4 mb-2">
              <p>
                <strong>Start Time:</strong> {entry.startTime}
              </p>
              <p>
                <strong>End Time:</strong> {entry.endTime}
              </p>
            </div>
          ))
        )}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        onClick={() => navigate("/dashboard")}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Zeiterfassung;
