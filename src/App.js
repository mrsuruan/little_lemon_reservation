// App.js

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Reservations from './components/Reservations.js'
import Menu from './components/Menu.js'
import Order from './components/Order.js'
import About from './components/About.js'
import Login from './components/Login.js'
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header className="app-header" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
        <Footer className="app-footer" />
    </div>
  );
}

export default App;
