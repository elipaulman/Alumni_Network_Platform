import React, { useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';

const resources = [
  {
    title: 'Grand Resources for Individual Artists',
    description: 'A nine-month studio residency program that focuses on creative practice development for emerging artists working across all disciplines.',
    link: 'https://www.dropbox.com/scl/fi/80b9bwsuxepclcd5ekawm/Fundraising_Grant-Resources-for-Individual-Artists_2020-04.pdf?rlkey=rp59gk5y9h8bhruejykbemhde&e=1&raw=1',
    category: 'Grants'
  },
  {
    title: 'Grandwriting Dos and Don\'ts',
    description: 'Helps artists develop knowledge and skills in raising the resources to support their practice.',
    link: 'https://www.dropbox.com/scl/fi/gywjsr8qkqid1jl29mkz5/Fundraising_Grantwriting-Dos-and-Donts_Upload_2020-04.pdf?rlkey=ktoouht2gqflawahokfymxbqh&e=1&raw=1',
    category: 'Grants'
  },
  {
    title: 'Grantwriting in Six Steps',
    description: 'Helps artists develop knowledge and skills in raising the resources to support their practice.',
    link: 'https://www.dropbox.com/scl/fi/kpyqzlsl2ff8o1fonelhu/Fundraising_Grantwriting-in-Six-Steps_Upload-2020-04.pdf?dl=0&e=1&rlkey=6bmosz3d9mcvwbayop5dsfnug&e=1&raw=1',
    category: 'Grants'
  },
  {
    title: 'Selecting Work Samples',
    description: 'Helps artists develop knowledge and skills in raising the resources to support their practice.',
    link: 'https://www.dropbox.com/scl/fi/c7dyzz4yv2t73zi7umg26/Work-Samples_Selecting-Work-Samples_2020-04.pdf?rlkey=dh53o0nnyvmfqihrma0phs58l&e=1&raw=1',
    category: 'Work Samples'
  },
  {
    title: 'Technical Tips for Preparing Work Samples',
    description: 'Helps artists develop knowledge and skills in raising the resources to support their practice.',
    link: 'https://www.dropbox.com/scl/fi/z91coulkg2l9n7nvkufg8/Work-Samples_Technical-Tips-for-Preparing-Work-Samples_2020-04.pdf?rlkey=59b77tq80zurcvna2utdm3mhc&e=1&raw=1',
    category: 'Work Samples'
  },
  {
    title: 'Work Samples Dos and Don\'ts',
    description: 'Helps artists develop knowledge and skills in raising the resources to support their practice.',
    link: 'https://lmcc.net/wp-content/uploads/2014/05/2012-Work-Samples-Selecting_Work_Samples.pdf',
    category: 'Work Samples'
  }
];

const categories = ['Work Samples', 'Grants', 'Arts Education'];

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