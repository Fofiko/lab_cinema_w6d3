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

Cinema.prototype.findByProperty = function (key, value) {
  const filmsByProperty = this.films.filter( film => value.toString() == film[key]);
  return filmsByProperty;
};

Cinema.prototype.checkByYear = function (year) {
  const filmsInYear = this.films.find( film => year === film.year);
  if (filmsInYear !== undefined) {
    return true;
  }
  else {
    return false;
  };
};

Cinema.prototype.allFilmsOverLength = function (length) {
  const filmsOverLength = this.films.filter( film => length <= film.length);
  if (this.films.length === filmsOverLength.length) {
    return true;
  }
  else {
    return false;
  };
};

Cinema.prototype.runningTime = function () {
  const runTime = this.films.reduce( (total, film) => total += film.length , 0);
  return runTime;
};



module.exports = Cinema;
