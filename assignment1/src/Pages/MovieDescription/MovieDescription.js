import React, { useState } from "react";

import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the movie with the matching ID
  const movie = movies.find((movie) => movie.id === parseInt(id, 10));
  // Move the useState hooks to the top
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  if (!movie) {
    return <div>Movie not found</div>;
  }
  

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <Box p={4}>
      <Flex direction="column" alignItems="center">
        <Heading as="h2" size="xl" mb={4}>
          {movie.title}
        </Heading>
        <Image
          src={movie.poster}
          alt={`${movie.title} Poster`}
          width="70%"
          mb={4}
        />
        <Text fontSize="lg" mb={4}>
          Release Date: {movie.releaseDate}
        </Text>
          <Text textAlign="left">{movie.description}</Text>

        <Text fontSize="lg" mb={2}>
          Date:
        </Text>
        <Select
          placeholder="Select a date"
          value={selectedDate}
          onChange={handleDateChange}
          mb={4}
        >
          <option value="29/10/2023">29/10/2023</option>
          <option value="01/11/2023">01/11/2023</option>
          <option value="02/11/2023">02/11/2023</option>
          {/* Add more date options */}
        </Select>

        <Text fontSize="lg" mb={2}>
          Time:
        </Text>
        <Select
          placeholder="Select a time"
          value={selectedTime}
          onChange={handleTimeChange}
          mb={4}
        >
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          {/* Add more time options */}
        </Select>
       {/* Back and Process buttons with spacing and size */}
       <Flex marginTop="9" width="15%" justifyContent="space-between">
          <Button
            style={{ backgroundColor: "grey", width: "150%" }}
            onClick={() => {
              navigate("/");
            }}
          >
             Back 
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => {
              navigate("/next-page");
            }}
          >
            Process
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MovieDescription;
