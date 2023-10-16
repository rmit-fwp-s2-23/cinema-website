import axios from "axios";
import { getPostsByFilm } from "./post";
import { useState, useEffect } from "react";
// --- Constants ----------------------------------------------------------------------------------
const API_HOST = "http://localhost:3002";

async function getFilms() {
  const response = await axios.get(API_HOST + `/api/film`);
  return response.data;
}

async function updateRating(id) {
  const response = await axios.put(API_HOST + `/api/film/${id}`);
  return response.data;
}

async function getFilm(id){
  const response = await axios.get(API_HOST + `/api/film/${id}`);
  return response.data;
}
// function AverageRating(data) {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       const reviewsData = await getPostsByFilm(data.title);
//       setReviews(reviewsData);
//     };

//     fetchReviews();
//   }, [data.title]); // Make sure to specify id as a dependency

//   let averageRating = 0;
//   let totalRating = 0;
//   let idx = 0;

//   if (reviews.length !== 0) {
//     reviews.map((review) => {
//       if (id === review.title) {
//         totalRating += review.rating;
//         idx += 1;
//       }
//     });
//     if (idx === 0) {
//       return 0;
//     }
//     averageRating = (totalRating / idx).toFixed(2);
//   }

//   return averageRating;
// }


export { getFilms, updateRating, getFilm};
