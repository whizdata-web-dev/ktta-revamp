import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Mission from "../../assets/img/goal.png";
import Vision from "../../assets/img/mission.jpg";
import OfficeBearerCard from "../../components/card/component/OfficeBearerCard";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../assets/config/fbConfig";
import backgroundImage from "../../assets/img/home_bg.jpg";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [officeBearerList, setOfficeBearerList] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const dbQuery = query(
        collection(db, "officebearers"),
        orderBy("order", "asc")
      );
      const querySnapshot = await getDocs(dbQuery);
      let list = [];
      querySnapshot.forEach((doc) => {
        let document = doc.data();
        document["id"] = doc.id;

        list.push(document);
      });
      setLoading(false);
      setOfficeBearerList(list);
    }
    getData();
  }, []);

  return (
    <Box>
      <Box>
        <main className='profile-page'>
          <section className='relative block h-600-px'>
            <Box
              className='absolute top-0 w-full h-full bg-center bg-cover'
              sx={{
                backgroundImage: `url(${backgroundImage})`,
                top: "-6rem",
                boxShadow: "0 0 10px rgb(0 0 0 / 80%) inset",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
              }}
            >
              <span
                id='blackOverlay'
                className='w-full h-full absolute opacity-25 bg-black'
              ></span>
            </Box>
          </section>
          <section className='relative pt-16 bg-blueGray-200'>
            <Box className='container mx-auto px-4'>
              <Box
                className='relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl'
                sx={{
                  marginBottom: "-8rem",
                  zIndex: 2,
                  paddingBottom: "2rem",
                  marginTop: {
                    xs: "-32rem !important",
                    md: "-24rem !important",
                  },
                }}
              >
                <Box className='px-4'>
                  <Box
                    className='w-full font-serif py-16 text-center md:py-8 border-b border-blueGray-200'
                    sx={{ margin: "2rem 0 4rem 0" }}
                  >
                    <Typography
                      variant='h2'
                      className='text-5xl font-semibold uppercase'
                      style={{ letterSpacing: "2px" }}
                    >
                      About US
                    </Typography>
                  </Box>
                  <Box
                    className='text-center'
                    sx={{
                      marginLeft: { md: "2rem" },
                      marginTop: { xs: "-4rem", lg: "-6rem" },
                    }}
                  >
                    <h3 className='tailwind_h3 text-4xl font-semibold leading-normal mb-2 text-blueGray-700'>
                      &nbsp;
                    </h3>
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: "2px", sm: "4px", md: "8px", lg: "16px" },
                      margin: "4vh 0",
                    }}
                  >
                    <Typography
                      sx={{
                        lineHeight: "2rem",
                        margin: "1rem",
                        textAlign: "justify",
                      }}
                      variant='body2'
                      color='text.secondary'
                    >
                      Karnataka Table Tennis Association (KTTA) was established
                      more than fifty years ago for the promotion of Table
                      Tennis in Karnataka. The State Association has to its
                      credit organised, a number of National events right from
                      the year, 1969, when the National championship was held
                      and from then on, many National events have been held in
                      Karnataka. In the past, Junior Nationals in 2001, Mayor's
                      Cup in 2003, South Zone National Ranking Tournament in
                      2004, Inter Institutional Championship in 2005 and in
                      2016, and National Ranking Championship (South Zone) in
                      2010, 2012 and in 2017 were conducted successfully.
                      Karnataka has produced several great players (including
                      arjuna awardees) in Table Tennis who have been national
                      champions and have played in international meets.
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: "2rem",
                        margin: "1rem",
                        textAlign: "justify",
                      }}
                      variant='body2'
                      color='text.secondary'
                    >
                      KTTA is now making good progress in promoting the game
                      with renewed vigour, largely due to the committed members.
                      The Association is headed by Shri Pralhad Joshi, Central Minister for Parliamentary Affairs and Coal & Mines, Govt. of India as President. The
                      Association believes it has much to contribute to the game
                      of Table Tennis in the years to come.
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: "2rem",
                        margin: "1rem",
                        textAlign: "justify",
                      }}
                      variant='body2'
                      color='text.secondary'
                    >
                      In the past, tournaments and championships organised by
                      KTTA have been amply supported by the Public Sector giants
                      Indian Oil Corporation Ltd. and leading financial
                      Institutions of the country like State Bank of India and
                      Canara Bank, among other organisations in the Public
                      Sector and in the Private Sector.
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: "2rem",
                        margin: "1rem",
                        textAlign: "justify",
                      }}
                      variant='body2'
                      color='text.secondary'
                    >
                      KTTA enjoys active support by the affiliated District
                      Table Tennis Associations in its endeavour to promote the
                      game.
                    </Typography>
                    <Typography
                      sx={{
                        lineHeight: "2rem",
                        margin: "1rem",
                        textAlign: "justify",
                      }}
                      variant='body2'
                      color='text.secondary'
                    >
                      It is the express commitment of KTTA to explore ways and
                      means to recognise talented young boys and girls at the
                      grass root level in the State and promote their growth to
                      become competitive players at the national and
                      international level in the years to come.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "block", md: "flex" },
                      background: "#fff",
                      padding: { xs: "2px", sm: "4px", md: "8px", lg: "16px" },
                      margin: "4vh 0 0 0",
                    }}
                  >
                    <Box sx={{ width: { xs: "100%", md: "30%" } }}>
                      <CardMedia
                        className='tailwind_img'
                        component='img'
                        height='50'
                        image={Mission}
                        alt='Post Image'
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{ lineHeight: "2rem", margin: "1rem" }}
                        gutterBottom
                        variant='h5'
                        component='div'
                      >
                        Our Vision
                      </Typography>
                      <Typography
                        sx={{
                          lineHeight: "2rem",
                          margin: "1rem",
                          textAlign: "justify",
                        }}
                        variant='body2'
                        color='text.secondary'
                      >
                        The Association Aspires To Facilitate Karnataka State
                        Contributing Predominantly To The Composition Of The
                        Table Tennis Contingents That Represent India in
                        Prestigious International Tournaments.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column-reverse", md: "row" },
                      background: "#fff",
                      padding: { xs: "2px", sm: "4px", md: "8px", lg: "16px" },
                      margin: "0",
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          lineHeight: "2rem",
                          textAlign: "justify",
                          margin: "1rem 1rem 2rem 1rem",
                        }}
                        gutterBottom
                        variant='h5'
                        component='div'
                      >
                        Our Mission
                      </Typography>
                      <ul
                        style={{
                          textAlign: "justify",
                          marginLeft: { xs: "-1rem", sm: "1rem" },
                        }}
                      >
                        <li>
                          <Typography
                            sx={{
                              lineHeight: "1.5rem",
                              textAlign: "justify",
                              margin: { xs: "0.7rem", md: "1rem" },
                            }}
                            variant='body2'
                            color='text.secondary'
                          >
                            To Explore Ways & Means to Draw Talented Players to
                            Competitive Table Tennis
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{
                              lineHeight: "1.5rem",
                              textAlign: "justify",
                              margin: { xs: "0.7rem", md: "1rem" },
                            }}
                            variant='body2'
                            color='text.secondary'
                          >
                            Exploring Ways & Means to Build a Financially Strong
                            Association
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{
                              lineHeight: "1.5rem",
                              textAlign: "justify",
                              margin: { xs: "0.7rem", md: "1rem" },
                            }}
                            variant='body2'
                            color='text.secondary'
                          >
                            Facilitate creation of Quality training centres
                            Throughout The State
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{
                              lineHeight: "1.5rem",
                              textAlign: "justify",
                              margin: { xs: "0.7rem", md: "1rem" },
                            }}
                            variant='body2'
                            color='text.secondary'
                          >
                            Facilitate creation of a pool of Qualified Coaches
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{
                              lineHeight: "1.5rem",
                              textAlign: "justify",
                              margin: { xs: "0.7rem", md: "1rem" },
                            }}
                            variant='body2'
                            color='text.secondary'
                          >
                            Facilitate Creation Of a pool of Qualified Technical
                            Officials
                          </Typography>
                        </li>
                        <li>
                          <Typography
                            sx={{
                              lineHeight: "1.5rem",
                              textAlign: "justify",
                              margin: { xs: "0.7rem", md: "1rem" },
                            }}
                            variant='body2'
                            color='text.secondary'
                          >
                            Achieve membership of 1000 players by 2020 and 2000
                            players by 2025
                          </Typography>
                        </li>
                      </ul>
                    </Box>
                    <Box sx={{ width: { xs: "100%", md: "30%" } }}>
                      <CardMedia
                        component='img'
                        width='60%'
                        image={Vision}
                        alt='Post Image'
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </section>
        </main>
      </Box>
      <Box>
        {/* <section className='relative block h-600-px'>
          <Box
            className='absolute top-0 w-full h-full bg-center bg-cover'
            sx={{
              backgroundImage: `url(${backgroundImage})`,
              boxShadow: "0 0 10px rgb(0 0 0 / 80%) inset",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-25 bg-black'
            ></span>
          </Box>
        </section> */}
        <Box className='text-white font-serif mx-4 p-4 text-center md:p-8'>
          <Typography
            variant='h2'
            className='text-5xl uppercase'
            style={{ letterSpacing: "2px", marginTop: "16rem" }}
          >
            Office Bearers
          </Typography>
        </Box>
        <Box sx={{ padding: "4rem 4rem 2rem 4rem" }}>
          <Grid container spacing={4}>
            {!loading &&
              officeBearerList.map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                  <OfficeBearerCard officeBearer={item} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
