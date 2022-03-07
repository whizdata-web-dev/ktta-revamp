import React, { useState } from "react";
import { Box, Card, Grid, Tooltip, Typography } from "@mui/material";
import RankingDialog from "./RankingDialog";

const PlayersComponents = () => {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");

  const event = [
    "Cadet Singles",
    "Sub-junior Singles",
    "Junior Singles",
    "Youth Singles",
    "Women/Men Singles",
  ];

  const events = {
    "Cadet Singles boy": "Cadet Boy's Singles",
    "Cadet Singles girl": "Cadet Girl's Singles",
    "Sub-junior Singles boy": "Sub-junior Boy's Singles",
    "Sub-junior Singles girl": "Sub-junior Girl's Singles",
    "U21 Singles Men's": "U21 Men's Singles",
    "Junior Singles boy": "Junior Boy's Singles",
    "Junior Singles girl": "Junior Girl's Singles",
    "Youth Singles boy": "Youth Boy's Singles",
    "Youth Singles girl": "Youth Girl's Singles",
    "Women/Men Singles boy": "Men's Singles",
    "Women/Men Singles girl": "Women's Singles",
    "Junior Boy's Singles": "Junior Boy's Singles",
    "Senior Boy's Singles": "Senior Boy's Singles",
    "Sub Junior Girls": "Sub Junior Girls",
    "Even Junior Boy's Team": "Even Junior Boy's Team",
    "Junior Doubles": "Junior Doubles",
    "Open Doubles": "Open Doubles",
  };

  const handleOpen = (name, cat) => {
    setOpen(true);
    setEventName(events[`${name} ${cat}`]);
  };

  const handleClose = () => {
    setOpen(false);
    setEventName("");
  };

  return (
    <>
      <Box>
        <Box
        // sx={{
        //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1040%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(33%2c 25%2c 64%2c 1)'%3e%3c/rect%3e%3cpath d='M0 413.32L10 473.32L20 418.72L30 357.91L40 419.8L50 483.79L60 527.71L70 477.03L80 491.1L90 428.01L100 457.12L110 397.83L120 371.9L130 317.51L140 258.17L150 246.4L160 228.66L170 247.01L180 275.05L190 247.38L200 224.76L210 171.35L220 183.19L230 225.24L240 158.97L250 189.24L260 147.75L270 103.82L280 56.03L290 53.96L300 48.07L310 55.97L320 26.19L330 12.49L340 21.17L350 85.09L360 85.19L370 18.34L380 74.98L390 141.81L400 161.69L410 121.17L420 123L430 102.53L440 46.66L450 44.93L460 84.35L470 93.79L480 59.31L490 60.61L500 90.68L510 73.25L520 111.02L530 128.85L540 177.42L550 247.36L560 278.22L570 219.8L580 175.88L590 130.25L600 177.83L610 111.47L620 93.53L630 119.2L640 68.89L650 56.89L660 5.19L670 61.1L680 32.4L690 9.7L700 63.68L710 51.01L720 14.65L730 28.83L740 62.13L750 100.02L760 100.04L770 34.06L780 6.23L790 3.96L800 31.9L810 11.44L820 26.28L830 77.81L840 59.72L850 64.82L860 5.66L870 29.29L880 79.22L890 106.89L900 44.89L910 4L920 36.51L930 11.07L940 7.46L950 26.14L960 87.74L970 114.48L980 171.26L990 191.6L1000 164.44L1010 215.29L1020 210.01L1030 207.95L1040 269.15L1050 321.02L1060 364.65L1070 322.86L1080 255.32L1090 200.28L1100 231.07L1110 164.45L1120 96.27L1130 50.22L1140 45.62L1150 40.45L1160 0.58L1170 57.33L1180 81.18L1190 118.2L1200 107.74L1210 60.96L1220 28.86L1230 70.71L1240 8.36L1250 52.84L1260 95.6L1270 35.45L1280 43.67L1290 40.88L1300 56.62L1310 88.2L1320 87.4L1330 133.12L1340 194.08L1350 137.11L1360 187.47L1370 219.71L1380 281.55L1390 244.42L1400 225.84L1410 188L1420 191.21L1430 147.05L1440 164.44' stroke='rgba(71%2c 57%2c 128%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 413.32L10 473.32L20 418.72L30 357.91L40 419.8L50 483.79L60 527.71L70 477.03L80 491.1L90 428.01L100 457.12L110 397.83L120 371.9L130 317.51L140 258.17L150 246.4L160 228.66L170 247.01L180 275.05L190 247.38L200 224.76L210 171.35L220 183.19L230 225.24L240 158.97L250 189.24L260 147.75L270 103.82L280 56.03L290 53.96L300 48.07L310 55.97L320 26.19L330 12.49L340 21.17L350 85.09L360 85.19L370 18.34L380 74.98L390 141.81L400 161.69L410 121.17L420 123L430 102.53L440 46.66L450 44.93L460 84.35L470 93.79L480 59.31L490 60.61L500 90.68L510 73.25L520 111.02L530 128.85L540 177.42L550 247.36L560 278.22L570 219.8L580 175.88L590 130.25L600 177.83L610 111.47L620 93.53L630 119.2L640 68.89L650 56.89L660 5.19L670 61.1L680 32.4L690 9.7L700 63.68L710 51.01L720 14.65L730 28.83L740 62.13L750 100.02L760 100.04L770 34.06L780 6.23L790 3.96L800 31.9L810 11.44L820 26.28L830 77.81L840 59.72L850 64.82L860 5.66L870 29.29L880 79.22L890 106.89L900 44.89L910 4L920 36.51L930 11.07L940 7.46L950 26.14L960 87.74L970 114.48L980 171.26L990 191.6L1000 164.44L1010 215.29L1020 210.01L1030 207.95L1040 269.15L1050 321.02L1060 364.65L1070 322.86L1080 255.32L1090 200.28L1100 231.07L1110 164.45L1120 96.27L1130 50.22L1140 45.62L1150 40.45L1160 0.58L1170 57.33L1180 81.18L1190 118.2L1200 107.74L1210 60.96L1220 28.86L1230 70.71L1240 8.36L1250 52.84L1260 95.6L1270 35.45L1280 43.67L1290 40.88L1300 56.62L1310 88.2L1320 87.4L1330 133.12L1340 194.08L1350 137.11L1360 187.47L1370 219.71L1380 281.55L1390 244.42L1400 225.84L1410 188L1420 191.21L1430 147.05L1440 164.44L1440 560L0 560z' fill='url(%23SvgjsLinearGradient1041)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1040'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='SvgjsLinearGradient1041'%3e%3cstop stop-opacity='0.65' stop-color='rgba(71%2c 57%2c 128%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='%239b8fcd' offset='0.8'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
        //   padding: "1rem",
        //   height: "10rem",
        // }}
        ></Box>
        <Grid container>
          {eventName && (
            <RankingDialog
              eventName={eventName}
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
            />
          )}
          {[2018, 2019, 2020, 2021].map((value) => (
            <Grid item xs={12} sm={6} md={4} xl={3} key={value}>
              <Card
                sx={{
                  borderRadius: 0,
                  background: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                  padding: "2rem",
                  margin: { xs: "0.5rem", md: "1rem" },
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    color: "#333",
                    textAlign: "center",
                    animation: "1s moveInLeft",
                    marginBottom: "1rem",
                  }}
                >
                  Players Ranking - {value}
                </Typography>
                <Grid
                  container
                  sx={{ display: "flex", animation: "1s moveInTop" }}
                >
                  {event.map((event, index) => (
                    <React.Fragment key={index}>
                      <Grid
                        item
                        xs={1}
                        sx={{
                          margin: "0.5vh 0",
                        }}
                      >
                        <Tooltip
                          title={
                            event === "Women/Men Singles" ? "Women's" : `Girls`
                          }
                          placement='left'
                        >
                          <Box
                            className='material-icons'
                            sx={{
                              textAlign: "center",
                              color: "#C62368",
                              cursor: "pointer",
                              transition: "0.2s ease",
                              "&:hover": {
                                transform: "scale(1.3)",
                              },
                            }}
                            onClick={(e) =>
                              handleOpen(event, e.target.innerText)
                            }
                          >
                            girl
                          </Box>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={10} sx={{ margin: "0.5vh 0" }}>
                        <Typography
                          variant='body1'
                          sx={{
                            textAlign: "center",
                            borderBottom: "1px solid #999",
                            width: "80%",
                            margin: "0.1rem auto",
                          }}
                        >
                          {event}
                        </Typography>
                      </Grid>
                      <Grid item xs={1} sx={{ margin: "0.5vh 0" }}>
                        <Tooltip
                          title={
                            event === "Women/Men Singles" ? "Men's" : `Boys`
                          }
                          placement='right'
                        >
                          <Box
                            className='material-icons'
                            sx={{
                              textAlign: "center",
                              color: "#001220",
                              cursor: "pointer",
                              transition: "0.2s ease",
                              "&:hover": {
                                transform: "scale(1.3)",
                              },
                            }}
                            onClick={(e) =>
                              handleOpen(event, e.target.innerText)
                            }
                          >
                            boy
                          </Box>
                        </Tooltip>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PlayersComponents;
