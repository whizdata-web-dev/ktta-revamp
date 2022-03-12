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
      <main className='profile-page'>
        <section className='relative block h-350-px'>
          <Box
            className='absolute top-0 w-full h-full bg-center bg-cover'
            sx={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1007%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(36%2c 31%2c 59%2c 1)'%3e%3c/rect%3e%3cg transform='translate(0%2c 0)' stroke-linecap='round'%3e%3cpath d='M260 210.1 L260 349.9' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M280 133.22 L280 426.78' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M300 106.84 L300 453.15' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M320 153.56 L320 406.44' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M340 141.77 L340 418.23' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M360 165.19 L360 394.81' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M380 141.25 L380 418.75' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M400 257.95 L400 302.05' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M420 159.12 L420 400.88' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M440 250.39 L440 309.61' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M460 152.74 L460 407.26' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M480 156.03 L480 403.97' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M500 208.61 L500 351.39' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M520 141 L520 419' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M540 110.38 L540 449.62' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M560 140.07 L560 419.93' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M580 177.63 L580 382.37' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M600 146.5 L600 413.5' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M620 139.85 L620 420.15' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M640 144.36 L640 415.64' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M660 171.75 L660 388.25' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M680 109.6 L680 450.39' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M700 121.43 L700 438.57' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M720 206.3 L720 353.7' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M740 253.15 L740 306.85' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M760 239.51 L760 320.49' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M780 174.06 L780 385.94' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M800 176.32 L800 383.68' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M820 257.68 L820 302.32' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M840 135.76 L840 424.24' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M860 138.41 L860 421.59' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M880 258.69 L880 301.31' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M900 162.67 L900 397.33' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M920 204.26 L920 355.74' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M940 221.22 L940 338.77' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M960 138.81 L960 421.19' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M980 165.03 L980 394.97' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M1000 210.42 L1000 349.58' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M1020 256.88 L1020 303.12' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M1040 225.8 L1040 334.2' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M1060 253.79 L1060 306.21' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M1080 235.28 L1080 324.73' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M1100 157.94 L1100 402.06' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M1120 181.22 L1120 378.78' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3cpath d='M1140 198.44 L1140 361.56' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M1160 127.68 L1160 432.32' stroke-width='15' stroke='rgba(77%2c 63%2c 137%2c 1)'%3e%3c/path%3e%3cpath d='M1180 114.44 L1180 445.56' stroke-width='15' stroke='rgba(112%2c 99%2c 191%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1007'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-50 bg-black'
            ></span>
          </Box>
        </section>
        <section className='relative py-16 bg-blueGray-200'>
          <Box className='container mx-auto px-4'>
            <Box
              className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl -mt-80'
              sx={{ backgroundColor: "#F1F1F1" }}
            >
              <Box className='px-6 mt-8 mb-8'>
                <Box>
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
                      <Grid item xs={12} sm={6} md={6} xl={4} key={value}>
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
                                      event === "Women/Men Singles"
                                        ? "Women's"
                                        : `Girls`
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
                                      event === "Women/Men Singles"
                                        ? "Men's"
                                        : `Boys`
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
              </Box>
            </Box>
          </Box>
        </section>
      </main>
    </>
  );
};

export default PlayersComponents;
