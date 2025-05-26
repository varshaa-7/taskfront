import React from 'react';
import { Container, Typography } from '@mui/material';
import Destinations from './components/Destinations.jsx';
import Packages from './components/Packages.jsx';
import Hero from './components/Hero.jsx';

const App = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <Packages />
    </>
  );
};

export default App;
