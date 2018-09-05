const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.getFilmTitles = function () {
//   const filmTitles = this.films.map ( film => film.title)
//   return filmTitles
// };

Cinema.prototype.getFilmTitles = function () {
  const filmTitles = this.films.map ( film => {
    return film.title});
  return filmTitles;
};

Cinema.prototype.findByTitle = function (title) {
  const film = this.films.find( film => title === film.title);
  return film;
};

Cinema.prototype.findByGenre = function (genre) {
  const filmsByGenre = this.films.filter( film => genre === film.genre);
  return filmsByGenre;
};


module.exports = Cinema;
