import React, { useContext } from 'react';
import { DataContext } from '../context/data.context';
import { Flex, Text, Box } from '@chakra-ui/react';

export default function Features() {
  const data = useContext(DataContext);
  return (
    <>
      <Flex p="20px" justifyContent="space-evenly">
        <Box textAlign="start">
          <Text fontSize="12px">name</Text>
        </Box>
        <Box>
          <Text fontSize="12px">learn</Text>
        </Box>
      </Flex>
      {data.map(a => {
        return (
          <Flex
            p="20px"
            border="1px solid grey"
            borderRadius="20px"
            key={a.id}
            m="12px 7px"
            justifyContent="space-evenly"
            alignContent="start"
          >
            <Box textAlign="start">
              <Text>{a.name}</Text>
            </Box>
            <Text color="grey">{a.learn}</Text>
          </Flex>
        );
      })}
    </>
  );
}
