import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ColorContextProvider from './context/color.context';
import customTheme from './utils/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <ColorContextProvider>
          <App />
        </ColorContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
