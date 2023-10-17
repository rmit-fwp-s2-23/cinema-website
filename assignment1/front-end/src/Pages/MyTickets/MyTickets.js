
import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import { tickets } from './tickets';

const MyTickets = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        My Tickets
      </Heading>
      <VStack spacing={4} align="start">
        {tickets.map((ticket) => (
          <Box
            key={ticket.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            width="100%"
          >
            <Heading as="h2" size="lg">
              {ticket.title}
            </Heading>
            <p>name: {ticket.name}</p>
            <p>Status: {ticket.status}</p>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default MyTickets;
