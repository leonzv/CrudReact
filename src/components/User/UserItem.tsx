import React from 'react';
import { Link } from 'react-router-dom';
import { User } from "./types";
import './UserItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function UserItem({ user, handleDeleteUser }: { user: User; handleDeleteUser: (id: number) => void }) {
  return (
    <li>
      <Link to={`/users/${user.id}/edit`}>
        <h2>{user.name}</h2>
      </Link>
      <p>Email: {user.email}</p>
      <button className="delete" onClick={() => handleDeleteUser(user.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <hr />
    </li>
  );
}

export default UserItem;
