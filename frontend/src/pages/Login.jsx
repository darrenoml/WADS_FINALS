import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3024/api/users/register', { email, password });
      alert('Registration successful');
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }

  };

  return (
    <form onSubmit={handleRegister} style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required /><br />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required /><br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
