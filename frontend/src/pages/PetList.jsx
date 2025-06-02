import React from 'react';
import { Link } from 'react-router-dom';

export default function PetList() {
  return (
    <div>
      <h1>Available Pets</h1>
      <h2>Dogs</h2>
      <div className="pet-grid">
        {[
          { name: 'Rufus', breed: 'Golden Retriever', image: 'golden.jpg', url: '#' },
          { name: 'Chaser', breed: 'Rottweiler', image: 'rott.jpeg', url: '#' },
          { name: 'Pom-poms', breed: 'Pomeranian', image: 'Pomeranian.JPG', url: '#' },
          { name: 'Moneymaker', breed: 'Shiba Inu', image: 'moneymaker.avif', url: '/pet/moneymaker' }
        ].map(pet => (
          <div key={pet.name} className="dog-card">
            <img src={pet.image} alt={pet.breed} />
            <p>{pet.name}, {pet.breed}</p>
            <Link to={pet.url}><button>Adopt {pet.name}</button></Link>
          </div>
        ))}
      </div>
      <div>
        <iframe
    src="https://www.chatbase.co/chatbot-iframe/nRrT1Y0iXTZxtPCVzdsY5"
    width="100%"
    style="height: 100%; min-height: 700px"
    frameborder="0"
></iframe>
      </div>
    </div>
  );
}
