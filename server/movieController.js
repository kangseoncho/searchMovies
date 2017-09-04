const fetch = require('node-fetch');
const apiURL = `https://api.themoviedb.org/4/list/1?api_key=`;
const apiKey = '1ec38a1fbf3f19ded30cccb862f0366f';
const PosterUrlFirstPiece = 'https://image.tmdb.org/t/p/w500/';

const movieController = {
  getMovieAPI(req, res) {
    fetch(apiURL + apiKey)
      .then(response => response.json())
      .then(list => list.results)
      .then(results => {
        const displayItems = ['id', 'title', 'poster_path', 'overview', 'release_date'];

        const filteredData = results.map((movieData, i) => {
          return Object.keys(movieData)
          .filter(key => displayItems.includes(key))
          .reduce((filteredObj, key) => {
            filteredObj[key] = movieData[key];
            return filteredObj;
          }, {});
        })

        res.json(filteredData);
      })
  }
}

module.exports = movieController;