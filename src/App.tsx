import { ChakraProvider,Button } from '@chakra-ui/react';
import Router from './router/Router';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router></Router>
    </ChakraProvider>
  );
}

export default App;
