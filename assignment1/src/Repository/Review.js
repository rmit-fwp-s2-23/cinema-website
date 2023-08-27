import isEqual from "lodash/isEqual";
const REVIEWS = "reviews";

//create an empty array with key named "reviews" in localStorage when running the web for first time
function initReview() {
  if (localStorage.getItem(REVIEWS) === null) {
    const data = [];
    localStorage.setItem(REVIEWS, JSON.stringify(data));
  }
}

//add the review to the reviews list in localStorage
function createReview(data) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  reviews.push(data);
  localStorage.setItem(REVIEWS, JSON.stringify(reviews));
}

//delete a specific review from reviews list in localStorage
function deleteReview(user) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  if (reviews !== null) {
    let filtered_reviews = reviews.filter((review) => {
      if (user.username != review.writer) {
        return review;
      }
    });
    localStorage.setItem(REVIEWS, JSON.stringify(filtered_reviews));
  }
}

//get all the reviews with the specific writer
function getReviewsByWritter(user) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  if (reviews !== null) {
    let filtered_reviews = reviews.filter((review) => {
      if (user.username === review.writer) {
        return review;
      }
    });
    return filtered_reviews;
  }
}

//get all the reviews of a specific film
function getReviewsByTitle(title) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  let filtered_reviews = reviews.filter((review) => {
    if (title === review.title) {
      return review;
    }
  });
  return filtered_reviews;
}

//edit the review with a id of review
function changeReview(id, data, user) {
  let editedReviews = getReviewsByWritter(user);
  let filtered_review = editedReviews[id];
  console.log(filtered_review);
  let reviews = JSON.parse(localStorage.getItem(REVIEWS));
  let final_reviews = reviews.map((review) => {
    if (isEqual(review, filtered_review)) {
      return {
        ...review,
        content: data.content,
        rating: data.rating,
      };
    }
    return review; // Return unchanged review
  });
  console.log(final_reviews);
  localStorage.setItem(REVIEWS, JSON.stringify(final_reviews));
}

//remove the review
function removeReview(id, user) {
  let reviews = getReviewsByWritter(user);
  let filtered_review = reviews[id];
  reviews = JSON.parse(localStorage.getItem(REVIEWS));
  let final_reviews = reviews.filter(
    (review) => !isEqual(review, filtered_review)
  );
  localStorage.setItem(REVIEWS, JSON.stringify(final_reviews));
}
//get the average rating of a specific film
function getAverageRating(title) {
  const reviews = JSON.parse(localStorage.getItem(REVIEWS));
  let averageRating = 0;
  let totalRating = 0;
  let idx = 0;
  if (reviews.length !== 0) {
    reviews.map((review) => {
      if (title === review.title) {
        totalRating += review.rating;
        idx += 1;
      }
    });
    if (idx === 0) {
      return 0;
    }
    return (averageRating = totalRating / idx).toFixed(2);
  }
  return 0;
}

export {
  createReview,
  deleteReview,
  getReviewsByWritter,
  getReviewsByTitle,
  initReview,
  changeReview,
  getAverageRating,
  removeReview,
};
