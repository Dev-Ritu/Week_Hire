import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import {noResult} from  "../Images"

const EmptyState = () => (
  <Container>
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: "80vh" , display:"flex", flexDirection: "column"}}
    >
      <Grid item>
        <img src={noResult} height="150px" width="150px" alt="no-result"/>
      </Grid>
      <Grid item>
        <Typography variant="h5" className="font-bold">No Jobs available for this category at the moment

</Typography>
      </Grid>
    </Grid>
  </Container>
);

export default EmptyState;
