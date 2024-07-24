import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dienstplan.css";

const Dienstplan = () => {
  const [date, setDate] = useState(new Date()); // Zustand  Datum
  const [shifts, setShifts] = useState([]); // Zustand  Schichten

  // Datum Ändern
  const handleDateChange = (date) => {
    setDate(date);
  };

  // Schicht Hinzufügen
  const handleAddShift = () => {
    const shift = prompt("Enter shift details (e.g., 09:00-17:00):");
    if (shift) {
      setShifts([...shifts, { date, shift }]); // Neue Schicht zum Zustand hinzufügen
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dienstplan</h1>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="mb-4 calendar-container" // Kalenderkomponente
      />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mb-4"
        onClick={handleAddShift}
      >
        Add Shift
      </button>
      <div className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">Shifts</h2>
        {shifts.map((shift, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 mb-2">
            <p>
              <strong>Date:</strong> {shift.date.toDateString()}
            </p>
            <p>
              <strong>Shift:</strong> {shift.shift}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dienstplan;
