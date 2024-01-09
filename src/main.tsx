import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider} from "@chakra-ui/react";
import { ColorModeScript } from '@chakra-ui/react'
import Theme from './Theme.jsx';
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
    <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);