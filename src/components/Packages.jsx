import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPackages } from '../api';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Skeleton,
  Box,
} from '@mui/material';
import { FaSuitcaseRolling } from 'react-icons/fa';

const Packages = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchPackages,
  });

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', mt: 4, textAlign: 'center' }}
        color='#0E5823'
      >
        Top Selling Tour Packages of India
      </Typography>

      {/* Center the cards */}
      <Grid container spacing={3} justifyContent="center">
        {(isLoading ? Array.from(new Array(6)) : data).map((pkg, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            sx={{ display: 'flex', justifyContent: 'center' }} // centers each card
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
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  height: '100%',
                  maxWidth: 320,
                  width: '100%',
                  borderRadius: 4,
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={pkg.image}
                  alt={pkg.title}
                  sx={{ width: '100%', objectFit: 'cover' }}
                  
                />

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <FaSuitcaseRolling />
                    <Typography variant="h6">{pkg.title}</Typography>
                  </Box>

                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#5A827E',
                      '&:hover': { backgroundColor: '#1565c0' },
                      textTransform: 'none',
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Packages;
