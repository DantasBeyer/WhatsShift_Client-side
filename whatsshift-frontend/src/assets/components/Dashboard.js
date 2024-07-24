import React from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => navigate("/dienstplan")}
        >
          Dienstplan
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => navigate("/zeiterfassung")}
        >
          Zeiterfassung
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => navigate("/verfügbarkeit")}
        >
          Verfügbarkeit
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => navigate("/user-profile")}
        >
          User Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
