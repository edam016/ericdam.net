import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { GitHub, Feed,  Instagram, LinkedIn } from '@mui/icons-material';

export const IconList = () => {
  const openPdfInNewTab = () => {
    window.open('/EricDamNewGrad2023US.pdf');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <IconButton onClick={() => window.open('https://www.linkedin.com/in/eric-dam-62589b158/', '_blank')}>
          <LinkedIn />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => window.open('https://github.com/edam016', '_blank')}>
          <GitHub />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={() => window.open('https://www.instagram.com/ericdaam/', '_blank')}>
          <Instagram />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={openPdfInNewTab}>
            <Feed />
          </IconButton>
      </Grid>
    </Grid>
  );
};

export default IconList;
