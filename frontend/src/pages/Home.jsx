import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to AdoptMe</h1>
      <p>Your go-to platform for adopting lovable pets.</p>
      <nav style={{ marginTop: '1rem' }}>
        <Link to="/pets">View Pets</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}

export default Home;
