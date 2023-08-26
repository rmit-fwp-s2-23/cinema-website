const REVIEWS = "reviews";

function initReview() {
  if (localStorage.getItem(REVIEWS) === null) {
    const data = [];
    localStorage.setItem(REVIEWS, JSON.stringify(data));
  }
}

function createReview(data) {
  data.content = data.content.replace(/\n/g, "___LINE_BREAK___");
  if (localStorage.getItem(REVIEWS) === null) {
    const reviews = new Array();
    reviews.push(data);
    localStorage.setItem(REVIEWS, JSON.stringify(reviews));
    return;
  }
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  reviews.push(data);
  localStorage.setItem(REVIEWS, JSON.stringify(reviews));
}

function deleteReview(username) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  if(reviews !==null){
  let filtered_reviews = reviews.filter((review) => {
    if (username != review.writer) {
      return review;
    }
  });
  localStorage.setItem(REVIEWS, JSON.stringify(filtered_reviews));
}
}

function getReviewsByWritter(username) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  if (reviews !== null) {
    let filtered_reviews = reviews.filter((review) => {
      if (username === review.writer) {
        review.content = review.content.replace(/___LINE_BREAK___/g, "\n");
        return review;
      }
    });
    return filtered_reviews;
  }
  return reviews;
}

function getReviewsByTitle(title) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  let filtered_reviews = reviews.filter((review) => {
    review.content = review.content.replace(/___LINE_BREAK___/g, "\n");
    if (title === review.title) {
      return review;
    }
  });
  return filtered_reviews;
}

function changeReview(id, data) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  reviews[id].content = data.content;
  reviews[id].rating = data.rating;
  localStorage.setItem(REVIEWS, JSON.stringify(reviews));
}
export {
  createReview,
  deleteReview,
  getReviewsByWritter,
  getReviewsByTitle,
  initReview,
  changeReview,
};
