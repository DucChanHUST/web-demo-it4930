import React from "react";
import StatCard from "../component/StatCard";

import { Grid2, Stack } from "@mui/material";

const Top = () => {
  return (
    <Stack direction="row" spacing={2} style={{ width: "100%" }}>
      <Grid2 xs={4} className="center-root">
        <StatCard title="huhu" value="100k" changePercen={10} />
      </Grid2>
      <Grid2 xs={4} className="center-root">
        <StatCard title="hehehe" value="100k" changePercen={-10} />
      </Grid2>
      <Grid2 xs={4} className="center-root">
        <StatCard title="huhuhu" value="100k" changePercen={10} />
      </Grid2>
    </Stack>
  );
};

export default Top;
