import React from 'react';

export default function AdoptForm() {
  return (
    <div>
      <h1>Adoption Application for Moneymaker</h1>
      <form>
        <input type="text" placeholder="Full Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="tel" placeholder="Phone" required /><br />
        <input type="text" placeholder="Address" required /><br />
        <input type="text" placeholder="City" required />
        <input type="text" placeholder="State" required />
        <input type="text" placeholder="Zip" required /><br />
        {/* Additional fields... */}
        <textarea placeholder="Why do you want to adopt Moneymaker?" required></textarea><br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
