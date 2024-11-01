import React from 'react';
import { Typography } from '@mui/material';

export default function CenteredTitle({ text, variant = 'h5', sx = {} }) {
  return (
    <Typography
      variant={variant}
      component="h1"
      sx={{
        fontSize: '1.5rem', 
        fontWeight: '500', 
        textAlign: 'center', 
        lineHeight: '1.4', 
        marginY: 2, 
        ...sx, 
      }}
    >
      {text}
    </Typography>
  );
}