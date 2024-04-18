const renderFilms = require('./renderFilms');
const axios = require('axios');

axios.get('http://localhost:3000/movies')
  .then(response => {
    const movies = response.data
    movies.forEach(movie => {
      renderFilms(movie)
    });
  })
  .catch(error => {
    console.error('Error al obtener las películas:', error);
  });
