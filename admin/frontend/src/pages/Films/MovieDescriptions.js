import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getFilms, updateFilm } from "../../repository/film";
const MovieDescription = () => {
  const [fields, setFields] = useState({ releaseDate: "", description: "" });
  const { film_id } = useParams();
  const [movie, setMovie] = useState(null);
  const fetchMovie = async () => {
    const movieData = await getFilms();
    const foundMovie = movieData.find(
      (movie) => movie.film_id === parseInt(film_id, 10)
    );
    setMovie(foundMovie); // Set the found movie
  };
  useEffect(() => {
    fetchMovie();
  }, [film_id]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleUpdate = async () => {
    fields.film_id = movie.film_id;
    await updateFilm(fields);
      navigate("/films");
  };
  const handleCancel = () => {
    // Optionally, you can reset the input values or navigate back to the previous page
    navigate("/films");
  };

  return (
    <Flex direction="column" h="100vh">
      {movie === null ? (
        <div>
          <p>Loading ...</p>
        </div>
      ) : (
        <ChakraProvider>
          <Box p={4}>
            <Text fontSize="3xl" fontWeight="bold" mb={4} color="white">
              {movie.title}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="white">
              Release Date:
            </Text>
            <Input
              color={"white"}
              type="text"
              name = "releaseDate"
              value={fields.releaseDate}
              onChange={handleChange}
            />

            <Text fontSize="xl" fontWeight="semibold" color="white">
              Description
            </Text>
            <Input
              color={"white"}
              type="text"
              name = "description"
              value={fields.description}
              onChange={handleChange}
            />
            <Button
              colorScheme="blue"
              mt={4}
              onClick={() => {
                handleUpdate();
              }}
            >
              Update
            </Button>
            <Button colorScheme="red" mt={4} onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </ChakraProvider>
      )}
    </Flex>
  );
};

export default MovieDescription;
