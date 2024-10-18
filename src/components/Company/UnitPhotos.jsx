import {  Card, CardMedia, Box, Typography } from '@mui/material';
import React from 'react';

const DynamicImageGrid = ({ images }) => {
  const maxVisibleImages = 5; // Number of images to show (4 small + 1 main image)

  return (
    <Grid container spacing={1}>
      {/* Main Image (first image) */}
      {images.length > 0 && (
        <Grid item xs={12} sm={8}>
          <Card sx={{ borderRadius: '8px' }}>
            <CardMedia
              component="img"
              height="300"
              image={images[0].url} // Main image from API
              alt={images[0].alt || 'Main Image'}
            />
          </Card>
        </Grid>
      )}

      {/* Render smaller images */}
      <Grid item xs={12} sm={4}>
        <Grid container spacing={1}>
          {images.slice(1, maxVisibleImages).map((image, index) => (
            <Grid item xs={6} key={index}>
              <Card sx={{ borderRadius: '8px' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={image.url} // Use images from API
                  alt={image.alt || `Image ${index + 2}`}
                />
              </Card>
            </Grid>
          ))}

          {/* If there are more images, show overlay */}
          {images.length > maxVisibleImages && (
            <Grid item xs={6}>
              <Card sx={{ borderRadius: '8px', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={images[maxVisibleImages].url} // Last visible image
                  alt="More Images"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '24px',
                    fontWeight: 'bold',
                  }}
                >
                  +{images.length - maxVisibleImages}
                </Box>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DynamicImageGrid;
