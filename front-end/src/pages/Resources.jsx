import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';

const resources = [
  {
    title: 'Workspace Residency',
    description: 'A nine-month studio residency program that focuses on creative practice development for emerging artists working across all disciplines.',
    link: 'https://www.dropbox.com/scl/fi/gywjsr8qkqid1jl29mkz5/Fundraising_Grantwriting-Dos-and-Donts_Upload_2020-04.pdf?rlkey=ktoouht2gqflawahokfymxbqh&e=1&raw=1', // Modified for direct access
    category: 'Residencies'
  },
  {
    title: 'Fundraising Fundamentals',
    description: 'Helps artists develop knowledge and skills in raising the resources to support their practice.',
    link: 'https://example.com/fundraising-fundamentals.pdf',
    category: 'Professional Development'
  }
];

const categories = ['Residencies', 'Grants', 'Professional Development'];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedResource(null); // Reset selected resource when category changes
  };

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
  };

  const filteredResources = selectedCategory
    ? resources.filter(resource => resource.category === selectedCategory)
    : [];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Resources For Artists
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => handleCategoryClick(category)}
            sx={{ mx: 1 }}
          >
            {category}
          </Button>
        ))}
      </Box>
      {selectedCategory && (
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            {selectedCategory}
          </Typography>
          <List>
            {filteredResources.map((resource, index) => (
              <ListItem button key={index} onClick={() => handleResourceClick(resource)}>
                <ListItemText primary={resource.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      {selectedResource && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {selectedResource.title}
          </Typography>
          <iframe
            src={selectedResource.link}
            width="100%"
            height="600px"
            title={selectedResource.title}
          />
        </Box>
      )}
    </Container>
  );
};

export default Resources;