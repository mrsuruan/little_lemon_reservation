// App.js

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="app-container">
        <Header className="app-header" />
        <Main className="app-main" />
        <Footer className="app-footer" />
    </div>
  );
}

export default App;
