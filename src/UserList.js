// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  function UserList() {
    // ...
    
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>List of Users</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {listOfUsers.map(user => (
            <li key={user.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    )};
  }

export default UserList;
