import React, { useEffect, useState } from 'react';
// import { useQuery, useMutation } from '@apollo/client';
import { Flex, Box, Button, Center, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Define your GraphQL query to fetch reviews
// const GET_REVIEWS = yourGraphQLQueryHere;

// Define your GraphQL mutation to delete reviews
// const DELETE_REVIEW = yourGraphQLMutationHere;

function AdminReviews() {
  // Fetch reviews using the GET_REVIEWS query
  // const { loading, error, data } = useQuery(GET_REVIEWS);

  // Define a function to handle review deletion
  const handleDeleteReview = (reviewId) => {
    // Call the DELETE_REVIEW mutation to delete the review
    // Implement the actual mutation logic here
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    
    // <Center h="100vh" flexDirection="column" alignItems="flex-start">
      <Flex direction="column" h="100vh">
      <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" width="100%" >
        <h1>Admin Reviews Management</h1>
        
        <SimpleGrid columns={4} spacing={4}>
          <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md" >
            <h2>Title</h2>
          </Box>
          <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
            <h2>User</h2>
          </Box>
          <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
            <h2>Review</h2>
          </Box>
          <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
            <h2>Edit</h2>
          </Box>
          
        </SimpleGrid>
        {/* {data.reviews.map((review) => ( */}
          <SimpleGrid columns={4} spacing={4} 
          // key={review.id}
          >
            <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
              {/* {review.title} */}
            </Box>
            <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
              {/* {review.user.username} */}
            </Box>
            <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
              {/* {review.content} */}
            </Box>
            <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
              <Button
                colorScheme="teal"
                // onClick={() => handleDeleteReview(review.id)}
              >
                Delete
              </Button>
            </Box>
          </SimpleGrid>
        {/* ))} */}
      </Box>
    {/* </Center> */}
    </Flex>
    
  );
}

export default AdminReviews;
