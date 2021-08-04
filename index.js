const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(express.static('public')); // retrives files from public folder
app.use(morgan('common')); // logging with Morgan
app.use(bodyParser.json()); // JSON Parsing

let topMovies = [
  {
    title: 'The Usual Suspects',
    director: 'Bryan Singer'
  },
  {
    title: 'Nostalghia',
    director: 'Andrei Tarkovsky'
  },
  {
    title: 'Buffalo \'66',
    director: 'Vincent Gallo'
  },
  {
    title: 'My Neighbor Totoro',
    director: 'Hayao Miyazaki'
  },
  {
    title: 'Amelie',
    director: 'Jean-Pierre Jeunet'
  },
  {
    title: 'Tokyo Story',
    director: 'Yasujiro Ozu'
  },
  {
    title: 'Trainspotting',
    director: 'Danny Boyle'
  },
  {
    title: 'Lost in Translation',
    director: 'Sofia Coppola'
  },
  {
    title: 'Little Miss Sunshine',
    director: 'Jonathan Dayton \\ Valerie Faris'
  },
  {
    title: 'Cinema Paradiso',
    director: 'Giuseppe Tornatore'
  }
];

// GET requests
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
