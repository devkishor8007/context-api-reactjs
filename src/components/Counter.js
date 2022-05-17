import React, { useContext } from 'react';
import { Text, Button, Flex } from '@chakra-ui/react';
import { counterContext } from '../context/CounterContextProvider';

export default function Counter() {
  const { count, increase, decrease } = useContext(counterContext);
  return (
    <div>
      <Text fontSize="60px" fontWeight="bold">
        {count}
      </Text>
      <Flex alignContent="center" justifyContent="center">
        <Button variant="outline" mr="12px" rounded="16px" onClick={increase}>
          +
        </Button>
        <Button colorScheme="teal" rounded="16px" onClick={decrease}>
          -
        </Button>
      </Flex>
    </div>
  );
}
