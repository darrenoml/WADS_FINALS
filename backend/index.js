const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/pets');
const ticketRoutes = require('./routes/tickets');
const chatbotlogRoutes = require('./routes/chatbotLog')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/chatbotlog', chatbotlogRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
