import React from 'react';
import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <div id="app">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
