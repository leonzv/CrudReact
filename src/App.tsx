import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/User/EditUser';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navApp">
          <ul className="ulApp">
            <li className="liApp">
              <Link to="/">Lista de Usuários</Link>
            </li>
            <li className="liApp">
              <Link to="/add">Cadastrar Usuário</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
