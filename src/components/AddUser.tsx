import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';


function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();
  
  async function postUser(newUser: any) {
    await axios.post('http://localhost:3001/api/users', newUser);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { name, email };
    await postUser(newUser);
    history('/'); // Redirect to home page
  };

  return (
    <div className="addUser">
      <h2 className="titleUserAdd">Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input className="inputUser" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="inputUser" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btnUser" type="submit">Cadastrar</button>
        </form>
    </div>
    );
}

export default AddUser;
