import React from "react";

import { StatCard, PieChartCard } from "../component";
import { Grid2 } from "@mui/material";

const Mid = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size="grow" className="center-root">
        hehe
      </Grid2>
      <Grid2 size={4} className="center-root">
        <PieChartCard nameChart={"hix"} />
      </Grid2>
    </Grid2>
  );
};

export default Mid;
