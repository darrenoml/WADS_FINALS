import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pets">Pets</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
