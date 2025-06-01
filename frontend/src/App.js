import './style.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PetList from './pages/PetList';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import PetDetail from './pages/PetDetail';
import AdoptForm from './pages/AdoptForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pet/moneymaker" element={<PetDetail />} />
          <Route path="/adopt/moneymaker" element={<AdoptForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
