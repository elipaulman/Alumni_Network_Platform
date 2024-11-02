import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const resources = [
  {
    title: 'Workspace Residency',
    description: 'A nine-month studio residency program that focuses on creative practice development for emerging artists working across all disciplines.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    link: 'https://lmcc.net/resources/artist-residencies/workspace/',
    category: 'Residencies'
  },
  {
    title: 'Arts Center Residency',
    description: 'The Arts Center at Governors Island is home to year-round artist residency programs for artists working in any discipline.',
    image: 'https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg',
    link: 'https://lmcc.net/resources/artist-residencies/arts-center-residency/',
    category: 'Residencies'
  },
  {
    title: 'SU-CASA',
    description: 'SU-CASA is a community arts engagement program that places artists and organizations in residence at senior centers across the five boroughs of New York City.',
    image: 'https://images.pexels.com/photos/1431122/pexels-photo-1431122.jpeg',
    link: 'https://lmcc.net/resources/artist-residencies/su-casa/',
    category: 'Residencies'
  },
  {
    title: 'Extended Life Residency',
    description: 'The Extended Life Dance Development Residency program extends the lives of ephemeral, essential works of dance, and advances the creative lives of the artists themselves.',
    image: 'https://images.pexels.com/photos/1126318/pexels-photo-1126318.jpeg',
    link: 'https://lmcc.net/resources/artist-residencies/extended-life/',
    category: 'Residencies'
  },
  {
    title: 'Rehearsal Week',
    description: 'LMCC’s rehearsal program is a core part of our commitment to ensuring artists have free space for creative development and production in New York City.',
    image: 'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg',
    link: 'https://lmcc.net/resources/artist-residencies/rehearsal-week/',
    category: 'Residencies'
  },
  {
    title: 'Creative Engagement',
    description: 'Provides grants for arts events and programming in any discipline anywhere in the borough of Manhattan.',
    image: 'https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg',
    link: 'https://lmcc.net/resources/grants/creative-engagement/',
    category: 'Grants'
  },
  {
    title: 'Creative Learning',
    description: 'Provides grants for community arts education and participatory art-making projects for older adults in any discipline anywhere in the borough of Manhattan.',
    image: 'https://images.pexels.com/photos/3184458/pexels-photo-3184458.jpeg',
    link: 'https://lmcc.net/resources/grants/creative-learning/',
    category: 'Grants'
  },
  {
    title: 'UMEZ Arts Engagement',
    description: 'Provides grants for arts presentations and programming in any discipline anywhere in Upper Manhattan.',
    image: 'https://images.pexels.com/photos/1413421/pexels-photo-1413421.jpeg',
    link: 'https://lmcc.net/resources/grants/umez-arts-engagement/',
    category: 'Grants'
  },
  {
    title: 'Fundraising Fundamentals',
    description: 'Helps artists develop knowledge and skills in raising the resources to support their practice.',
    image: 'https://images.pexels.com/photos/3184458/pexels-photo-3184458.jpeg',
    link: 'https://lmcc.net/resources/professional-development/fundraising-fundamentals/',
    category: 'Professional Development'
  },
  {
    title: 'Grantwriting Dos and Don’ts',
    description: 'Provides tips and best practices for writing successful grant applications.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    link: 'https://lmcc.net/resources/professional-development/grantwriting-dos-and-donts/',
    category: 'Professional Development'
  },
  {
    title: 'Project Budgeting Video',
    description: 'A video resource on how to budget for your projects effectively.',
    image: 'https://images.pexels.com/photos/1020875/pexels-photo-1020875.jpeg',
    link: 'https://lmcc.net/resources/professional-development/project-budgeting-video/',
    category: 'Professional Development'
  },
  {
    title: 'Grantwriting in Six Steps',
    description: 'A step-by-step guide to writing successful grant applications.',
    image: 'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg',
    link: 'https://lmcc.net/resources/professional-development/grantwriting-in-six-steps/',
    category: 'Professional Development'
  },
  {
    title: 'Selecting Work Samples',
    description: 'Guidelines for selecting the best work samples for your grant applications.',
    image: 'https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg',
    link: 'https://lmcc.net/resources/professional-development/selecting-work-samples/',
    category: 'Professional Development'
  },
  {
    title: 'Technical Tips for Preparing Work Samples',
    description: 'Technical tips to ensure your work samples are prepared correctly.',
    image: 'https://images.pexels.com/photos/1181378/pexels-photo-1181378.jpeg',
    link: 'https://lmcc.net/resources/professional-development/technical-tips-for-preparing-work-samples/',
    category: 'Professional Development'
  },
  {
    title: 'In-Kind Contribution',
    description: 'Understanding and utilizing in-kind contributions for your projects.',
    image: 'https://images.pexels.com/photos/3184458/pexels-photo-3184458.jpeg',
    link: 'https://lmcc.net/resources/professional-development/in-kind-contribution/',
    category: 'Professional Development'
  },
  {
    title: 'Financial Statements',
    description: 'How to prepare and understand financial statements for your projects.',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg',
    link: 'https://lmcc.net/resources/professional-development/financial-statements/',
    category: 'Professional Development'
  },
  {
    title: 'Fiscal Sponsorship Fact Sheet',
    description: 'Information on fiscal sponsorship and how it can benefit your projects.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    link: 'https://lmcc.net/resources/professional-development/fiscal-sponsorship-fact-sheet/',
    category: 'Professional Development'
  },
  {
    title: 'Project Design Work Sheet',
    description: 'A worksheet to help you design and plan your projects effectively.',
    image: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg',
    link: 'https://lmcc.net/resources/professional-development/project-design-work-sheet/',
    category: 'Professional Development'
  },
  {
    title: 'Work Sample Selection Video',
    description: 'A video guide on selecting the best work samples for your grant applications.',
    image: 'https://images.pexels.com/photos/3184456/pexels-photo-3184456.jpeg',
    link: 'https://lmcc.net/resources/professional-development/work-sample-selection-video/',
    category: 'Professional Development'
  },
  {
    title: 'Lesson Plan Video',
    description: 'A video guide on creating effective lesson plans for arts education.',
    image: 'https://images.pexels.com/photos/3184458/pexels-photo-3184458.jpeg',
    link: 'https://lmcc.net/resources/professional-development/lesson-plan-video/',
    category: 'Professional Development'
  }
];

const categories = ['All', 'Residencies', 'Grants', 'Professional Development'];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredResources = selectedCategory === 'All'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Resources For Artists
      </Typography>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={4}>
        {filteredResources.map((resource, index) => (
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
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Category: {resource.category}
                </Typography>
              </CardContent>
              <Button size="small" color="primary" href={resource.link} target="_blank" rel="noopener noreferrer" sx={{ m: 2 }}>
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
