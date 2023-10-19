
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import {  useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies, updateMovie }) => {
  const { movieTitle } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.title === movieTitle);
//   const [newReleaseYear, setNewReleaseYear] = useState(movie.releaseYear);

  const handleUpdateReleaseYear = () => {
    // Update the movie's release year in your state or API here
    // updateMovie(movieTitle, newReleaseYear);
  };
  const handleCancel = () => {
    // Optionally, you can reset the input values or navigate back to the previous page
    navigate('/films');
  };

  return (
    <Flex direction="column" h="100vh">
    <ChakraProvider >
      <Box p={4}>
        <Text fontSize="3xl" fontWeight="bold" mb={4} color="white">
          {/* {movie.title} */}
           Details
        </Text>
        <Text fontSize="xl" fontWeight="semibold" color="white">
          Release Date:
        </Text>
        <Input
        color={'white'}
          type="number"
        //   value={newReleaseYear}
        //   onChange={(e) => setNewReleaseYear(e.target.value)}
        />
        
        <Text fontSize="xl" fontWeight="semibold" color="white">
          Description
        </Text>
        <Input
        color={'white'}
        //   type="number"
        //   value={newReleaseYear}
        //   onChange={(e) => setNewReleaseYear(e.target.value)}
        />
        <Button colorScheme="blue" mt={4} onClick={handleUpdateReleaseYear}>
          Update 
        </Button>
        <Button colorScheme="red" mt={4} onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </ChakraProvider>
    </Flex>
  );
};

export default MovieDescription;
