import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dienstplan.css";

const Dienstplan = () => {
  const [date, setDate] = useState(newDate()); // Zustant für das Datum
  const [shifts, setSifts] = useState([]); // Zustant dür die Schichten

  // Datum Ändern
  const handleDateChange = (date) => {
    setDate(date);
  };
  // Schicht hinzufügen
  const handleAddShift = () =>{
    const schift = prompt ('Enter shift details (e.g., 09:00-17:00):');
    if(schift){
      setShift([...shifts, {date, shift}]); // Neue Schicht zum Zustand hinzufügen
    }


};

export default Dienstplan;
