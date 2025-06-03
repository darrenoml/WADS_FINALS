import { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [input, setInput] = useState('');
  const [log, setLog] = useState([]);

  const sendMessage = async () => {
    try {
      const res = await axios.post('http://localhost:3024/api/chatbot', { message: input });
      setLog([...log, { user: input, bot: res.data.reply }]);
      setInput('');
    } catch (err) {
        console.error(err);
        alert('Something went wrong');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Chatbot</h2>
      <div style={{ marginBottom: '1rem' }}>
        {log.map((entry, index) => (
          <div key={index}>
            <strong>You:</strong> {entry.user}<br />
            <strong>Bot:</strong> {entry.bot}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
