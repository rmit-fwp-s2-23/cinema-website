import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const MovieDescription = ({ movie }) => {
  return (
    <Box p={4}>
      <Heading>{movie.title}</Heading>
      <Image src={movie.poster} alt={`${movie.title} Poster`} />
      <Text>{movie.description}</Text>
      <Text>Average Rating: {movie.averageRating} / 5</Text>
      <Text>Release Date: {movie.releaseDate}</Text>
    </Box>
  );
};

export default MovieDescription;
