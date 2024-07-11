import React, { useEffect, useState } from 'react';
import api from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await api.get('/users');
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users', error);
        }
      };
  
      fetchUsers();
    }, []);
  
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.first_name} {user.last_name} - {user.email}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserList;