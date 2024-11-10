import React from "react";
import { styled } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { sky, teal, rose, fuchsia, emerald, yellow, blue } from "../theme";
import {
  Box,
  Card,
  Stack,
  Typography,
  CardContent,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";

const PieChartCard = ({ nameChart }) => {
  const data = [
    { label: "Port 22", value: 5300 },
    { label: "Port 24", value: 3040 },
    { label: "Port 25", value: 1020 },
    { label: "other", value: 100 },
  ];

  const colors = [
    sky[500],
    teal[500],
    rose[500],
    yellow[500],
    blue[500],
    fuchsia[500],
    emerald[500],
  ];
  const dataChart = data.map((item, index) => ({
    ...item,
    color: colors[index],
  }));

  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <Card variant="outlined" sx={{ height: "100%", flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          {nameChart}
        </Typography>
        <Box className="center-root">
          <PieChart
            color={colors}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            series={[
              {
                data: dataChart,
                innerRadius: "50%",
                outerRadius: "80%",
                paddingAngle: 0,
                highlightScope: { faded: "global", highlighted: "item" },
              },
            ]}
            width={250}
            height={250}
            slotProps={{ legend: { hidden: true } }}
          >
            <PieCenterLabel primaryText={total} secondaryText="Total" />
          </PieChart>
        </Box>
        {dataChart.map((item) => (
          <Stack sx={{ gap: 1, flexGrow: 1 }}>
            <Stack direction="row" sx={{ pt: 1 }} className="center-horizon">
              <Typography variant="body2" sx={{ fontWeight: "550" }}>
                {item.label}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {Math.floor((item.value / total) * 100)}%
              </Typography>
            </Stack>
            <LinearProgress
              variant="determinate"
              aria-label="Number of item by label"
              value={(item.value / total) * 100}
              sx={{
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: item.color,
                },
              }}
            />
          </Stack>
        ))}
      </CardContent>
    </Card>
  );
};

export default PieChartCard;

const PieCenterLabel = ({ primaryText, secondaryText }) => {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <React.Fragment>
      <StyledText variant="primary" x={left + width / 2} y={primaryY}>
        {primaryText}
      </StyledText>
      <StyledText variant="secondary" x={left + width / 2} y={secondaryY}>
        {secondaryText}
      </StyledText>
    </React.Fragment>
  );
};

const StyledText = styled("text", {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ theme }) => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fill: (theme.vars || theme).palette.text.secondary,
  variants: [
    {
      props: {
        variant: "primary",
      },
      style: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    {
      props: ({ variant }) => variant !== "primary",
      style: {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    {
      props: {
        variant: "primary",
      },
      style: {
        fontWeight: theme.typography.h5.fontWeight,
      },
    },
    {
      props: ({ variant }) => variant !== "primary",
      style: {
        fontWeight: theme.typography.body2.fontWeight,
      },
    },
  ],
}));
