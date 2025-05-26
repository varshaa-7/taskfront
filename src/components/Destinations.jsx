import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDestinations } from '../api';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Skeleton,
  Box,
} from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Destinations = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations,
  });

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', mt: 4, textAlign: 'center' }}
        color='#0E5823'
      >
        Explore Most Popular Destinations
      </Typography>

      {/* Center the grid items */}
      <Grid
        container
        spacing={3}
        justifyContent="center" // ⬅️ Center cards horizontally
      >
        {(isLoading ? Array.from(new Array(6)) : data).map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center' }} // ⬅️ Center individual cards
          >
            {isLoading ? (
              <Skeleton variant="rectangular" height={200} width="100%" />
            ) : (
              <Card
                sx={{
                  '&:hover': { boxShadow: 6 },
                  transition: '0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  maxWidth: 320,
                  width: '100%',
                  borderRadius: 4,
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.name}
                  sx={{ width: '100%', objectFit: 'cover' }}
                />

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <FaMapMarkerAlt />
                    <Typography variant="h6">{item.name}</Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    Starting from ₹{item.price}/-
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Destinations;
