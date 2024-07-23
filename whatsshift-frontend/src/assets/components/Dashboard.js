import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Dienstplan
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Zeiterfassung
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Verfügbarkeit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
