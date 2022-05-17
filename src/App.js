import React, { createContext } from 'react';
import { Box } from '@chakra-ui/react';
import Child from './Child';

const state = {
  name: 'kishor kc',
  code: 'js',
  age: 10,
  state: 'context api',
};

export const UserContext = createContext();
function App() {
  return (
    <Box rounded="19px" bg="red" maxW="680px" m="auto" align="center" p="10px">
      <UserContext.Provider value={state}>
        <Child />
      </UserContext.Provider>
    </Box>
  );
}

export default App;
