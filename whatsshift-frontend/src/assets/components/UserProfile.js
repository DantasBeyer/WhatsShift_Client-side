import React, { useState } from 'react'; // Importieren von React und useState Hook
import { useNavigate } from 'react-router-dom'; // Importieren des useNavigate Hook

const UserProfile = () => {
  const [name, setName] = useState(''); // Zustand für den Namen des Benutzers
  const [email, setEmail] = useState(''); // Zustand für die E-Mail des Benutzers
  const [phone, setPhone] = useState(''); // Zustand für die Telefonnummer des Benutzers
  const navigate = useNavigate(); // Hook für Navigation

  // Funktion zum Speichern der Profilinformationen
  const handleSaveProfile = () => {
    // Hier können Sie Logik hinzufügen, um die Profilinformationen zu speichern
    alert('Profile saved successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mb-4"
          onClick={handleSaveProfile}
        >
          Save Profile
        </button>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        onClick={() => navigate('/dashboard')}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default UserProfile;
