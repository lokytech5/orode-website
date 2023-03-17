import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import APPTheme from './theme/AppTheme'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import AppTheme from './theme/AppTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={APPTheme}>
    <ColorModeScript initialColorMode={AppTheme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
