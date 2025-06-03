import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3024/api/pets')
      .then(res => setPets(res.data))
      .catch(err => console.error('Error fetching pets:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Available Pets</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet._id}>
            <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pets;
