import React from 'react';
// import { useQuery, useMutation } from '@apollo/client';
import { Box, Button, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react';

// Define your GraphQL query to fetch user data
// const GET_USERS = yourGraphQLQueryHere;

// Define your GraphQL mutation to block/unblock users
// const BLOCK_USER = yourGraphQLMutationHere;

function AdminUsers() {
  // const { loading, error, data } = useQuery(GET_USERS);

  const handleBlockUser = (userId) => {
    // Call the BLOCK_USER mutation to block/unblock the user
    // Implement the actual mutation logic here
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    // <Center h="100vh" flexDirection="column">
      <Flex direction="column" h="100vh">
      <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" width="100%" >
        <h1>Admin User Management</h1>
      </Box>
      <SimpleGrid columns={3} spacing={7}>
        <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" >
          <h2>Username</h2>
        </Box>
        <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" >
          <h2>Status</h2>
        </Box>
        <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" >
          <h2>Action</h2>
        </Box>
      </SimpleGrid>
      {/* {data.users.map((user) => ( */}
        <SimpleGrid columns={3} spacing={5} 
        // key={user.id}
        >
          <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" >
            {/* {user.username} */}
          </Box>
          <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" >
            {/* {user.isBlocked ? 'Blocked' : 'Active'} */}
          </Box>
          <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" >
          
            <Button
              // colorScheme={user.isBlocked ? 'teal' : 'red'}
              // onClick={() => handleBlockUser(user.id)}
            >
              {/* {user.isBlocked ? 'Unblock' : 'Block'} */}block
            </Button>
            
          </Box>
        </SimpleGrid>
      {/* ))} */}
    {/* </Center> */}
    </Flex>
  );
}

export default AdminUsers;
