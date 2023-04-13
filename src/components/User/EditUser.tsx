import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../AddUser.css'

function EditUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const [ user, setUser ] = useState<any>([]);
  const [ emailUser, setEmailUser ] = useState<any>([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`http://localhost:3001/api/users/${id}`);
      setName(data.name);
      setEmail(data.email);
      setUser(data.name);
      setEmailUser(data.email);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = { name, email };
    await axios.put(`http://localhost:3001/api/users/${id}`, updatedUser);
    history('/');
  };

  return (
    <div className="addUser">
      <h2 className="titleUserAdd">Editar Usuário:</h2>
      <h4>Usuário: {user}</h4>
      <h4>Email: {emailUser}</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input className="inputUser" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="inputUser" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btnUser"  type="submit">Editar</button>
      </form>
    </div>
  );
}

export default EditUser;
