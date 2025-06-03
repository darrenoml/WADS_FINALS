import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PetDetail() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3024/api/pets/${id}`)
      .then(res => setPet(res.data))
      .catch(err => console.error('Error fetching pet:', err));
  }, [id]);

  if (!pet) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{pet.name}</h2>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <p>Description: {pet.description}</p>
    </div>
  );
}

export default PetDetail;
