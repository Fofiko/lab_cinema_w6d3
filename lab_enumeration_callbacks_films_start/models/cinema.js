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

Cinema.prototype.checkByYear = function (year) {
  const filmsInYear = this.films.find( film => year === film.year);
  console.log(filmsInYear);
  if (filmsInYear !== undefined) {
    return true
  }
  else {
    return false
  };
};







module.exports = Cinema;
