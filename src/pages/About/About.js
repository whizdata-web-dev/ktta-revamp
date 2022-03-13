import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Mission from "../../assets/img/goal.png";
import Vision from "../../assets/img/mission.jpg";
import TwitterPost from "../../assets/img/team-1-800x800.jpg";
import OfficeBearerCard from "../../components/card/component/OfficeBearerCard";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../assets/config/fbConfig";

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
          <section className='relative block h-500-px'>
            <Box
              className='absolute top-0 w-full h-full bg-center bg-cover'
              sx={{
                background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='300' preserveAspectRatio='none' viewBox='0 0 1440 300'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath1128%26quot%3b)' fill='none'%3e%3crect width='1440' height='300' x='0' y='0' fill='%2332325d'%3e%3c/rect%3e%3ccircle r='22.805' cx='374.36' cy='128.04' fill='url(%23SvgjsLinearGradient1129)'%3e%3c/circle%3e%3ccircle r='17.28' cx='286.27' cy='42.58' fill='url(%23SvgjsLinearGradient1130)'%3e%3c/circle%3e%3ccircle r='19.17' cx='438.9' cy='243.04' fill='url(%23SvgjsLinearGradient1131)'%3e%3c/circle%3e%3ccircle r='13.485' cx='443.18' cy='218.95' fill='url(%23SvgjsLinearGradient1132)'%3e%3c/circle%3e%3ccircle r='23.705' cx='1363.84' cy='158.72' fill='url(%23SvgjsLinearGradient1133)'%3e%3c/circle%3e%3ccircle r='14.05' cx='333.64' cy='280.51' fill='url(%23SvgjsLinearGradient1134)'%3e%3c/circle%3e%3ccircle r='10.85' cx='273.87' cy='174.34' fill='url(%23SvgjsLinearGradient1135)'%3e%3c/circle%3e%3ccircle r='16.6' cx='112.87' cy='135.51' fill='url(%23SvgjsLinearGradient1136)'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath1128'%3e%3crect width='1440' height='300' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3clinearGradient x1='328.75' y1='128.04' x2='419.97' y2='128.04' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1129'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='251.70999999999998' y1='42.58' x2='320.83' y2='42.58' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1130'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='400.55999999999995' y1='243.04' x2='477.23999999999995' y2='243.04' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1131'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='416.21000000000004' y1='218.95' x2='470.15000000000003' y2='218.95' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1132'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1316.4299999999998' y1='158.72' x2='1411.2499999999998' y2='158.72' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1133'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='305.53999999999996' y1='280.51' x2='361.73999999999995' y2='280.51' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1134'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='252.17000000000002' y1='174.34' x2='295.57' y2='174.34' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1135'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='79.67' y1='135.51' x2='146.07' y2='135.51' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1136'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
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
                className='relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl -mt-80'
                sx={{ marginBottom: "-8rem", zIndex: 2, paddingBottom: "2rem" }}
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
                      The Association is headed by Sri Dinesh Gundurao, Member
                      of the Legislative Assembly of Karnataka as President. The
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
        <section
          className='relative block h-500-px'
          style={{ marginTop: "-4rem" }}
        >
          <Box
            className='absolute top-0 w-full h-full bg-center bg-cover'
            sx={{
              background: `linear-gradient(
                        to right,
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.8)
                      ),url(https://picsum.photos/1920/1920/?random) center center no-repeat`,
              backgroundAttachment: "fixed",
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-50 bg-black'
            ></span>
            <Box className='text-white font-serif mx-4 p-4 text-center md:p-8'>
              <Typography
                variant='h2'
                className='text-5xl uppercase'
                style={{ letterSpacing: "2px", marginTop: "16rem" }}
              >
                Office Bearers
              </Typography>
            </Box>
          </Box>
        </section>
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
