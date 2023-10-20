import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Center,
  Stack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getFilms } from "../../repository/film";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/Nav/Nav";

function Films() {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  async function fecthFilms() {
    const filmsData = await getFilms();
    setFilms(filmsData);
  }
  useEffect(() => {
    fecthFilms();
  }, []);
  function handleEditClick(film_id) {
    navigate(`/film/${film_id}`);
  }
  return (
    <ChakraProvider>
        < NavigationBar />
      <Flex direction="column" h="120vh">
        <Box p={4}>
          <Text fontSize="3xl" fontWeight="bold" mb={4} color="white">
            Movie List
          </Text>
          <Button
            colorScheme="blue"
            size="sm"
            mt={4}
            onClick={() =>  navigate(`/newfilm`) }
          >
            Create new film
          </Button>
          {films.length === 0 ? (
            <div>
              <p>Loading ...</p>
            </div>
          ) : (
            <div>
              <Flex flexWrap="wrap">
                {films.map((film, index) => (
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
                    <Image src={film.poster} alt={film.title} />
                    <Text
                      fontSize="xl"
                      fontWeight="semibold"
                      mt={2}
                      color="white"
                    >
                      {film.title}
                    </Text>
                    <Text fontSize="md" color="white">
                      Released in {film.releaseDate}
                    </Text>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      mt={4}
                      onClick={() => handleEditClick(film.film_id)}
                    >
                      Edit
                    </Button>
                  </Box>
                ))}
              </Flex>
            </div>
          )}
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Films;
