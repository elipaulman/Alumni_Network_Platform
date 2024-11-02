import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const resources = [
  {
    title: 'Resource 1',
    description: 'Description for resource 1',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Resource 2',
    description: 'Description for resource 2',
    image: 'https://via.placeholder.com/150',
    link: '#'
  },
  {
    title: 'Resource 3',
    description: 'Description for resource 3',
    image: 'https://via.placeholder.com/150',
    link: '#'
  }
];

const Resources = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
      </Typography>
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={resource.image}
                alt={resource.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {resource.description}
                </Typography>
              </CardContent>
              <Button size="small" color="primary" href={resource.link} sx={{ m: 2 }}>
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;