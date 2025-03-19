require('dotenv').config(); // Läser in .env-filen
const express = require('express'); // Importera express
const mongoose = require('mongoose'); // Importera mongoose
const cors = require('cors'); // Importera cors

const app = express(); // Skapa en instans av express
const PORT = process.env.PORT; // Porten som servern ska lyssna på


app.use(express.json()); // Middleware för att tolka JSON
app.use(cors()); // Middleware för att aktivera CORS

console.log("MONGO_URI från process.env:", process.env.MONGO_URI); // Skriv ut MONGO_URI från .env-filen

// MongoDB-anslutning
mongoose.connect(process.env.MONGO_URI) 
    .then(() => console.log('MongoDB connected')) 
    .catch(err => console.error(err)); 

// Importera Capita-modellen
const Capita = require('./models/Capita'); 

// GET: Hämta alla snowboards från "capita" collection
app.get('/capita', async (req, res) => { // /capita endpoint
    try {
        const snowboards = await Capita.find(); // Hämta alla snowboards från databasen
        res.json(snowboards); // Skicka snowboards som JSON
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send("Hello, World! I'm using MongoDB with Express!");
});

// Starta servern
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

