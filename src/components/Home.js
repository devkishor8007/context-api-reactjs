import { Box, Button, Text, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ColorContext } from '../context/color.context';

export default function Home() {
  const colorCtx = useContext(ColorContext);
  const { selectColor, onColorChange } = colorCtx;
  return (
    <Box>
      <Text color={selectColor}>Kishor Kc</Text>
      <Box bg={selectColor} h="120px" w="full"></Box>
      <Flex m="2px" p="10px">
        <Button mr="7px" onClick={() => onColorChange('green')}>
          Change to green
        </Button>
        <Button onClick={() => onColorChange('blue')}>Change to blue</Button>
      </Flex>
    </Box>
  );
}
