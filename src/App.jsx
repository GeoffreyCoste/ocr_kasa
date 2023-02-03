import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Apartment from './pages/Apartment';
import Error from './components/Error';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<Apartment />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
