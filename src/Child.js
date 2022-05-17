import React, { useContext } from 'react';
import { UserContext } from './App';
import { Box, Flex, Text } from '@chakra-ui/react';
import SubChild from './SubChild'

export default function Child() {
  const data = useContext(UserContext);
  return (
    <>
    <Box color="white">
      <Text fontSize="18px" fontWeight="bold">
        {data.name}
      </Text>
      <Flex justifyContent="space-around" align="center" margin="20px">
        <Text>Learn: {data.code}</Text>
        <Text>Age: {data.age}</Text>
      </Flex>
    </Box>
    <SubChild />
    </>
  );
}
