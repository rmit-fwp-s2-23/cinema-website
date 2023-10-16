import React, { useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Select,
} from "@chakra-ui/react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the movie with the matching ID
  const movie = movies.find((movie) => movie.id === parseInt(id, 10));
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
          width="80%"
          mb={4}
        />
        <Text fontSize="lg" mb={4}>
          Release Date: {movie.releaseDate}
        </Text>

        <Text fontSize="lg" mb={2}>
          Time:
        </Text>
        <Select
          placeholder="Select a date"
          value={selectedDate}
          onChange={handleDateChange}
          mb={4}
        >
          <option value="date1">Date 1</option>
          <option value="date2">Date 2</option>
          <option value="date3">Date 3</option>
          {/* Add more date options */}
        </Select>

        <Text fontSize="lg" mb={2}>
          Ticket:
        </Text>
        <Select
          placeholder="Select a time"
          value={selectedTime}
          onChange={handleTimeChange}
          mb={4}
        >
          <option value="time1">Time 1</option>
          <option value="time2">Time 2</option>
          <option value="time3">Time 3</option>
          {/* Add more time options */}
        </Select>

        <Text textAlign="left">{movie.description}</Text>

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
