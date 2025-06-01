import React from 'react';
import { Link } from 'react-router-dom';

export default function PetDetail() {
  return (
    <div>
      <h1>Meet Moneymaker!</h1>
      <div className="dog-card">
        <img src="moneymaker.avif" alt="Shiba Inu" />
        <p>
          Moneymaker is a clever Shiba Inu with a signature smirk. Ideal for experienced dog owners.
          Vaccinated, neutered, and ready to be respected and adored like the savvy soul he is.
        </p>
        <Link to="/adopt/moneymaker"><button>Adopt Moneymaker</button></Link>
      </div>
    </div>
  );
}
