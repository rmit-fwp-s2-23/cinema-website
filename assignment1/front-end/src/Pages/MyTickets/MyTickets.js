import React from 'react';
import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import { tickets } from './tickets';


const MyTickets = () => {
  return (
    <Center >
      <Box p={5} width="40%" margin="0 auto">
        <Heading as="h1" size="xl" mb={4} align="Center">
          My Tickets
        </Heading>
        <VStack spacing={6} align="start">
          {tickets.map((ticket) => (
            

            <Box
              key={ticket.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              width="100%"
              backgroundColor="#deb992"
              alignContent="center"
              >
              <Heading as="h2" size="lg" color="#051622"> {/* Change text color to black */}
                {ticket.title}
              </Heading>
              <p color="#051622">name: {ticket.name}</p> {/* Change text color to black */}
              <p color="#051622">Status: {ticket.status}</p> {/* Change text color to black */}
            </Box>
            
          ))}
        </VStack>
      </Box>
    </Center>
  );
};

export default MyTickets;
