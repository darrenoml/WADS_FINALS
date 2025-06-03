import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function AdoptForm() {
  const { petId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    homeType: [],
    hasYard: false,
    reason: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pet_id: petId,
          ...formData,
          ticket_opened: new Date(),
          status: 'Pending'
        }),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        navigate('/profile');
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit application');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Adoption Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="p-2 border rounded"
            required
          />
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip"
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Home Type:</p>
            <div className="flex gap-4">
              {['Apartment', 'House', 'Other'].map(type => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="homeType"
                    value={type}
                    onChange={handleChange}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Why do you want to adopt this pet?"
            className="p-2 border rounded h-32"
            required
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}