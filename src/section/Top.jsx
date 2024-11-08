import React from "react";

import { StatCard } from "../component";
import { Grid2 } from "@mui/material";

const Top = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={4}>
        <StatCard title="huhu" value="100k" changePercen={10} />
      </Grid2>
      <Grid2 size={4}>
        <StatCard title="hehehe" value="100k" changePercen={-10} />
      </Grid2>
      <Grid2 size={4}>
        <StatCard title="huhuhu" value="100k" changePercen={10} />
      </Grid2>
    </Grid2>
  );
};

export default Top;
