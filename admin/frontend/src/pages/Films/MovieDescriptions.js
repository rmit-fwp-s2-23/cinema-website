
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';

const MovieDescription = ({ movies, updateMovie }) => {
  const { movieTitle } = useParams();
  const movie = movies.find((m) => m.title === movieTitle);
  const [newReleaseYear, setNewReleaseYear] = useState(movie.releaseYear);

  const handleUpdateReleaseYear = () => {
    // Update the movie's release year in your state or API here
    updateMovie(movieTitle, newReleaseYear);
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4} color="white">
          {movie.title} Details
        </Text>
        <Text fontSize="xl" fontWeight="semibold" color="white">
          Release Year:
        </Text>
        <Input
          type="number"
          value={newReleaseYear}
          onChange={(e) => setNewReleaseYear(e.target.value)}
        />
        <Button colorScheme="blue" mt={4} onClick={handleUpdateReleaseYear}>
          Update Release Year
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default MovieDescription;
