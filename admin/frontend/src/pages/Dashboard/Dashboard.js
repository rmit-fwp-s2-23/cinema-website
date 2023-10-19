import React from 'react';
import { Box, Button, Center, SimpleGrid } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Center h="100vh" flexDirection="column">
      <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" width="100%">
        <h1>Admin Dashboard</h1>
        <SimpleGrid columns={3} spacing={4}>
          <Box p={20} shadow="lg" borderWidth="1px" borderRadius="md">
            
            <Link to="/adminreviews"><h2>Reviews</h2></Link>
          </Box>
          <Box p={20} shadow="lg" borderWidth="1px" borderRadius="md">
            
            <Link to="/adminusers"><h2>Users</h2></Link>
          </Box>
          <Box p={20} shadow="lg" borderWidth="1px" borderRadius="md">
            
            <Link to="/analytics"><h2>Analytics</h2></Link>
          </Box>
        </SimpleGrid>
      </Box>
      <Center mt={20}>
        <Button colorScheme="teal">
          <Link to="/">Logout</Link>
        </Button>
      </Center>
    </Center>
  );
}

export default Dashboard;
