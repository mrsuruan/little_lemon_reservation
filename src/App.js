// App.js

import './App.css';
import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Reservations from './components/Reservations';
import ConfirmedBooking from './components/ConfirmedBooking';
import Menu from './components/Menu';
import Order from './components/Order';
import OurStory from './components/OurStory';
import Login from './components/Login';
import Basket from './components/Basket';
import Accessibility from "./components/Accessibility";
import Privacy from "./components/Privacy.js";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Routes, Route, link } from "react-router-dom";

const App = () => {

  return (
    <ChakraProvider>
      <Box className="app-container">
        <Header className="app-header" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
        <Footer className="app-footer" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
