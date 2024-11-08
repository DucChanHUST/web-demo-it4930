import React from "react";
import "./App.css";

import Top from "./section/Top";

import { Grid2, Stack } from "@mui/material";

const App = () => {
  return (
    <Stack spacing={2} className="center-root" sx={{ paddingX: "100px" }}>
      <Grid2
        xs={12}
        style={{
          padding: "16px",
          width: "100%",
        }}
      >
        <Top />
      </Grid2>
      <Grid2 xs={12}>huhu</Grid2>
    </Stack>
  );
};
export default App;
