import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Center,
  Stack,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';

const movies = [
  {
    title: 'Movie 1',
    releaseYear: 2020,
    image: 'https://example.com/movie1.jpg',
  },
  {
    title: 'Movie 2',
    releaseYear: 2019,
    image: 'https://example.com/movie2.jpg',
  },
  // Add more movie objects as needed
];

function MoviePage() {
  const handleEditClick = (title) => {
    console.log(`Edit button clicked for ${title}`);
  };

  return (
    <ChakraProvider>
      <Flex direction="column" h="100vh">
        <Box p={4}>
          <Text fontSize="3xl" fontWeight="bold" mb={4} color="white">
            Movie List
          </Text>
          <Flex flexWrap="wrap">
            {movies.map((movie, index) => (
              <Box
                key={index}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
                minW="300px"
                maxW="400px" // Increase the maximum width to make the boxes wider
                flex="1"
                margin="1rem"
                bg="gray.700"
              >
                <Image src={movie.image} alt={movie.title} />
                <Text fontSize="xl" fontWeight="semibold" mt={2} color="white">
                  {movie.title}
                </Text>
                <Text fontSize="md" color="white">Released in {movie.releaseYear}</Text>
                <Button
                  colorScheme="blue"
                  size="sm"
                  mt={4}
                  onClick={() => handleEditClick(movie.title)}
                >
                  Edit
                </Button>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MoviePage;
