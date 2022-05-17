import React, { createContext } from 'react';
import Counter from './components/Counter';
import { Box, Text } from '@chakra-ui/react';
import CounterContextProvider from './context/CounterContextProvider';

export const UserContext = createContext();
function App() {
  return (
    <CounterContextProvider>
      <Box align="center">
        <Text>Counter Context API Reactjs</Text>
        <Counter />
      </Box>
    </CounterContextProvider>
  );
}

export default App;
