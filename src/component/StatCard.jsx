import React from "react";

import { areaElementClasses } from "@mui/x-charts/LineChart";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import {
  Box,
  Card,
  Chip,
  Stack,
  useTheme,
  Typography,
  CardContent,
} from "@mui/material";

const StatCard = ({ title, changePercen, value }) => {
  const theme = useTheme();

  const daysInWeek = getDaysInMonth(4, 2024);
  const data = daysInWeek.map(() => Math.floor(Math.random() * 100));

  const chipBgColor =
    changePercen > 0 ? theme.palette.success.light : theme.palette.error.light;
  const chipTextColor =
    changePercen > 0 ? theme.palette.success.dark : theme.palette.error.dark;
  const chipBorderColor =
    changePercen > 0 ? theme.palette.success.main : theme.palette.error.main;
  const chartColor =
    changePercen > 0 ? theme.palette.success.main : theme.palette.error.main;

  return (
    <Card variant="outlined" sx={{ height: "100%", flexGrow: 1 }}>
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: "space-between", flexGrow: "1", gap: 1 }}
        >
          <Stack sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" className="center-horizon">
              <Typography variant="h2">{value}</Typography>
              <Chip
                sx={{
                  color: chipTextColor,
                  bgcolor: chipBgColor,
                  borderColor: chipBorderColor,
                  fontWeight: "bold",
                }}
                variant="outlined"
                label={`${changePercen}%`}
              />
            </Stack>
            <Typography
              variant="subtitle2"
              sx={{ paddingTop: "4px", color: "text.secondary" }}
            >
              Last 30 day
            </Typography>
          </Stack>
          <Box sx={{ width: "100%", height: 70 }}>
            <SparkLineChart
              colors={[chartColor]}
              data={data}
              area
              showHighlight
              showTooltip
              xAxis={{
                scaleType: "band",
                data: daysInWeek,
              }}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fill: `url(#area-gradient-${value}${data[0]})`,
                },
              }}
            >
              <AreaGradient
                color={chartColor}
                id={`area-gradient-${value}${data[0]}`}
              />
            </SparkLineChart>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatCard;

const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
};

const AreaGradient = ({ color, id }) => {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
};
