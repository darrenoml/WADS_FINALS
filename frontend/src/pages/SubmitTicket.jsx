import { useState } from 'react';
import axios from 'axios';

function SubmitTicket() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3024/api/tickets', { message });
      alert('Ticket submitted');
      setMessage('');
    } catch (err) {
        console.error(err);
        alert('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <h2>Submit a Support Ticket</h2>
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Describe your issue" required rows={4} cols={50} /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitTicket;
