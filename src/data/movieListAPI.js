function movieList () {};

movieList.get = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
      //localStorage.setItem('allMovies', JSON.stringify(json));
      return json;
    })
}

export default movieList;