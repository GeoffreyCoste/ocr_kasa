import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Apartment from '../../pages/Apartment';
import Error from '../Error';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apartment/:id" element={<Apartment />} />
      <Route path="/apartment/*" element={<Error />} />
      <Route path="/error" element={<Error />} />
      <Route path="/*" element={<Error />}></Route>
    </Routes>
  );
};

export default Router;
