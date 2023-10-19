import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
} from '@chakra-ui/react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
  };

  return (
    <Center h="100vh">
      <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
        <h1>Admin Login</h1>
        <VStack spacing={20} align="stretch">
          <HStack>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                width="120%" // Make the input element 100% wide
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                width="120%" // Make the input element 100% wide
              />
            </FormControl>
          </HStack>
          <Button colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default Login;
