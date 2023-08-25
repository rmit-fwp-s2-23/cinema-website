const FILMS = "films";

function createReview(filmTitle, data, username) {
  data.filmTitle = filmTitle;
  data.writter = username;
  data.textarea =  data.textarea.replace(/\n/g, '___LINE_BREAK___');
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
  let filtered_films = films.filter( (film)=> {
    if(username != film.writter){
        return film;
    }
  })
  localStorage.setItem(FILMS, JSON.stringify(filtered_films));
}

function getReviewsByWritter(username){
  const films = JSON.parse(localStorage.getItem(FILMS));
  let filtered_films = films.filter( (film)=> {
    if(username === film.writter){
        return film;
    }
  })
  return filtered_films;
}

export { createReview, deleteReview, getReviewsByWritter };
