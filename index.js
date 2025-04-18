import express, { json } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Restructure the data to be an array of word objects
const wordsData = [
  {"id": 1, "text": "Feather", "cost": 1},
  {"id": 2, "text": "Coal", "cost": 1},
  {"id": 3, "text": "Pebble", "cost": 1},
  {"id": 4, "text": "Leaf", "cost": 2},
  {"id": 5, "text": "Paper", "cost": 2},
  {"id": 6, "text": "Rock", "cost": 2},
  {"id": 7, "text": "Water", "cost": 3},
  {"id": 8, "text": "Twig", "cost": 3},
  {"id": 9, "text": "Sword", "cost": 4},
  {"id": 10, "text": "Shield", "cost": 4},
  {"id": 11, "text": "Gun", "cost": 5},
  {"id": 12, "text": "Flame", "cost": 5},
  {"id": 13, "text": "Rope", "cost": 5},
  {"id": 14, "text": "Disease", "cost": 6},
  {"id": 15, "text": "Cure", "cost": 6},
  {"id": 16, "text": "Bacteria", "cost": 6},
  {"id": 17, "text": "Shadow", "cost": 7},
  {"id": 18, "text": "Light", "cost": 7},
  {"id": 19, "text": "Virus", "cost": 7},
  {"id": 20, "text": "Sound", "cost": 8},
  {"id": 21, "text": "Time", "cost": 8},
  {"id": 22, "text": "Fate", "cost": 8},
  {"id": 23, "text": "Earthquake", "cost": 9},
  {"id": 24, "text": "Storm", "cost": 9},
  {"id": 25, "text": "Vaccine", "cost": 9},
  {"id": 26, "text": "Logic", "cost": 10},
  {"id": 27, "text": "Gravity", "cost": 10},
  {"id": 28, "text": "Robots", "cost": 10},
  {"id": 29, "text": "Stone", "cost": 11},
  {"id": 30, "text": "Echo", "cost": 11},
  {"id": 31, "text": "Thunder", "cost": 12},
  {"id": 32, "text": "Karma", "cost": 12},
  {"id": 33, "text": "Wind", "cost": 13},
  {"id": 34, "text": "Ice", "cost": 13},
  {"id": 35, "text": "Sandstorm", "cost": 13},
  {"id": 36, "text": "Laser", "cost": 14},
  {"id": 37, "text": "Magma", "cost": 14},
  {"id": 38, "text": "Peace", "cost": 14},
  {"id": 39, "text": "Explosion", "cost": 15},
  {"id": 40, "text": "War", "cost": 15},
  {"id": 41, "text": "Enlightenment", "cost": 15},
  {"id": 42, "text": "Nuclear Bomb", "cost": 16},
  {"id": 43, "text": "Volcano", "cost": 16},
  {"id": 44, "text": "Whale", "cost": 17},
  {"id": 45, "text": "Earth", "cost": 17},
  {"id": 46, "text": "Moon", "cost": 17},
  {"id": 47, "text": "Star", "cost": 18},
  {"id": 48, "text": "Tsunami", "cost": 18},
  {"id": 49, "text": "Supernova", "cost": 19},
  {"id": 50, "text": "Antimatter", "cost": 19},
  {"id": 51, "text": "Plague", "cost": 20},
  {"id": 52, "text": "Rebirth", "cost": 20},
  {"id": 53, "text": "Tectonic Shift", "cost": 21},
  {"id": 54, "text": "Gamma-Ray Burst", "cost": 22},
  {"id": 55, "text": "Human Spirit", "cost": 23},
  {"id": 56, "text": "Apocalyptic Meteor", "cost": 24},
  {"id": 57, "text": "Earth's Core", "cost": 25},
  {"id": 58, "text": "Neutron Star", "cost": 26},
  {"id": 59, "text": "Supermassive Black Hole", "cost": 35},
  {"id": 60, "text": "Entropy", "cost": 45}
];

// Middleware to parse JSON requests
app.use(json());

// GET to provide a random word from the word list
app.get('/', (req, res) => {
    try {
        const randomIndex = Math.floor(Math.random() * wordsData.length);
        const randomWord = wordsData[randomIndex];
        res.status(200).json(randomWord);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
