const FILMS = "films";

function createReview(filmTitle, data, username) {
  data.filmTitle = filmTitle;
  data.writter = username;
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

function getReviews(){
  const data = localStorage.getItem(FILMS);
}
export { createReview, deleteReview };
