const mongoose = require('mongoose'); // Importera mongoose

const CapitaSchema = new mongoose.Schema({ // Skapa ett schema för Capita snowboards
    name: { type: String, required: true },
    terrain_type: { type: String, required: true },
    shape: { type: String, required: true },
    camber_type: { type: String, required: true },
    price: { type: String, required: true },  
    sizes: { type: [String], required: true } 
});

module.exports = mongoose.model('Capita', CapitaSchema, 'capita'); // Exportera Capita-modellen
