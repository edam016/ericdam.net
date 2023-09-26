import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Feed, GitHub, Instagram, LinkedIn, Person } from '@mui/icons-material';

export const IconList = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <IconButton>
          <LinkedIn onClick={() => window.open('https://www.linkedin.com/in/eric-dam-62589b158/', '_blank')}/>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          < GitHub onClick={() => window.open('https://github.com/edam016', '_blank')}/>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <Instagram onClick={() => window.open('https://www.instagram.com/ericdaam/', '_blank')}/>
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton>
          <Feed onClick={()=>window.open("ericdam.net/src/assets/resume/EricDamNewGrad2023US.pdf", "_blank")}/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default IconList;
