import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import backgroundImage from '../assets/img1.jpg'; // Adjust if needed

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%', // fix 100vw issue
        position: 'relative',
        overflow: 'hidden', // prevent scroll
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 2, sm: 4 }, // responsive horizontal padding
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ zIndex: 2, color: 'white', maxWidth: '700px' }}>
        <Stack spacing={3}>
          <Typography variant="h3" fontWeight="bold">
            Discover Your Next <br /> Adventure
          </Typography>
          <Typography variant="subtitle1">
            Choose from our curated experiences, customized for every kind of traveler.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffcd00',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 8,
              width: 'fit-content',
              px: 4,
              py: 1.5,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#f1c40f' },
            }}
          >
            BOOK NOW
          </Button>
        </Stack>
      </Box>

      {/* Feature Footer Bar */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-around',
          py: 2,
          zIndex: 2,
          px: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography>Easy Booking</Typography>
        <Typography>Curated Destinations</Typography>
        <Typography>Trusted Support</Typography>
      </Box>
    </Box>
  );
};

export default Hero;
