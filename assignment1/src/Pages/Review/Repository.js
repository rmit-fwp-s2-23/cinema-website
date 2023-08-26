const FILMS = "films";

function initReview() {
  if (localStorage.getItem(FILMS) === null) {
    const data = [];
    localStorage.setItem(FILMS, JSON.stringify(data));
  }
}

function createReview(data) {
  data.content = data.content.replace(/\n/g, "___LINE_BREAK___");
  if (localStorage.getItem(FILMS) === null) {
    const lsFilm = new Array();
    lsFilm.push(data);
    localStorage.setItem(FILMS, JSON.stringify(lsFilm));
    return;
  }
  const lsFilm = JSON.parse(localStorage.getItem(FILMS));
  lsFilm.push(data);
  localStorage.setItem(FILMS, JSON.stringify(lsFilm));
}

function deleteReview(username) {
  const films = JSON.parse(localStorage.getItem(FILMS));
  if (films !== null) {
    let filtered_films = films.filter((film) => {
      if (username != film.writter) {
        return film;
      }
    });
    localStorage.setItem(FILMS, JSON.stringify(filtered_films));
  }
}

function getReviewsByWritter(username) {
  const films = JSON.parse(localStorage.getItem(FILMS));
  if (films !== null) {
    let filtered_films = films.filter((film) => {
      if (username === film.writter) {
        film.content = film.content.replace(/___LINE_BREAK___/g, "\n");
        return film;
      }
    });
    return filtered_films;
  }
  return films;
}

function getReviewsByTitle(title) {
  const films = JSON.parse(localStorage.getItem(FILMS));
  let filtered_films = films.filter((film) => {
    film.content = film.content.replace(/___LINE_BREAK___/g, "\n");
    if (title === film.filmTitle) {
      return film;
    }
  });
  return filtered_films;
}

function changeReview(id, data) {
  const films = JSON.parse(localStorage.getItem(FILMS));
  films[id].content = data.content;
  films[id].rating = data.rating;
  localStorage.setItem(FILMS, JSON.stringify(films));
}
export {
  createReview,
  deleteReview,
  getReviewsByWritter,
  getReviewsByTitle,
  initReview,
  changeReview,
};
