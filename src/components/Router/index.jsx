import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Apartment from '../../pages/Apartment';
import Error from '../Error';

const Router = () => {
  return (
    <Routes>
      <Route path="/ocr__kasa/" element={<Home />} />
      <Route path="/ocr__kasa/about" element={<About />} />
      <Route path="/ocr__kasa/apartment/:id" element={<Apartment />} />
      <Route path="/ocr__kasa/apartment/*" element={<Error />} />
      <Route path="/ocr__kasa/error" element={<Error />} />
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export default Router;
