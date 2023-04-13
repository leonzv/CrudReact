import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from "./User/types";
import UserItem from './User/UserItem';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then((response) => setUsers(response.data));
  }, []);

  const handleDeleteUser = async (id: number) => {
    await axios.delete(`http://localhost:3001/api/users/${id}`); // deleta da API local
    setUsers(users.filter((user) => user.id !== id));
  };
  
  return (
    <div className="user-list">
      <h2>Lista de Usuários</h2>
      <ul className="user-list__list">
        {users.map((user) => (
          <UserItem key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
