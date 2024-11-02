import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const Resources = () => {
  const resources = [
    {
      title: "Resource 1",
      pdfUrl: "https://example.com/resource1.pdf",
    },
    {
      title: "Resource 2",
      pdfUrl: "https://example.com/resource2.pdf",
    },
    {
      title: "Resource 3",
      pdfUrl: "https://example.com/resource3.pdf",
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: "40px" }}>
      <Grid container spacing={3}>
        {resources.map((resource, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h5" gutterBottom>
                {resource.title}
              </Typography>
              <iframe
                src={resource.pdfUrl}
                width="100%"
                height="500px"
                title={resource.title}
                style={{ border: "none" }}
              ></iframe>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;
