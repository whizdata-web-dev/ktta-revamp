import React from "react";
import { Box } from "@mui/material";

export default function ChartComponent({ id, classes, headingClasses }) {
  return (
    <>
      <Box className={classes[0]}>
        <Box className={classes[1]}>
          <Box className={classes[2]}>
            <Box className={classes[3]}>
              <h6 className={headingClasses[0]}>Overview</h6>
              <h2
                className={`uppercase ${headingClasses[1]}`}
                style={{ color: "rgba(148, 163, 184, 1)" }}
              >
                Analytics
              </h2>
            </Box>
          </Box>
        </Box>
        <Box className={classes[4]}>
          <Box className={classes[5]}>
            <canvas id={id}></canvas>
          </Box>
        </Box>
      </Box>
    </>
  );
}
