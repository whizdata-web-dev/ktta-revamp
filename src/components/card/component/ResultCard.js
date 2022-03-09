import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

export default function ResultCard({
  activeTab,
  players,
  round,
  val,
  centralize,
  size,
  numberOfSets,
}) {
  return (
    <Box
      sx={{
        minWidth: 300,
        margin: centralize
          ? val === 1 && size === 1
            ? "10rem auto 0 auto"
            : val !== size
            ? "10rem 0 15rem 0"
            : "1rem auto"
          : "1rem auto",
        transform: centralize ? "translateY(-3rem)" : "translateY(0)",
      }}
    >
      <Card className='scorecard' variant='outlined'>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, float: "right" }}
            color='text.secondary'
            gutterBottom
          >
            <b className='b'>
              {activeTab === "Round " ? activeTab + round : activeTab}
            </b>
            ,&nbsp; Match: {val}
          </Typography>
          <br />
          <Divider />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12 - numberOfSets}
                sm={12 - numberOfSets}
                md={12 - numberOfSets}
              >
                <Typography variant='h5' component='div'>
                  Player 1
                </Typography>
              </Grid>
              {[...new Array(numberOfSets)].map((_, i) => {
                return (
                  <Grid item xs={1} sm={1} md={1}>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        textAlign: "center",
                        border: "0.1px solid #333",
                      }}
                      color='text.secondary'
                    >
                      <b className='b'>{i >= 3 ? " " : i * i}</b>
                    </Typography>
                  </Grid>
                );
              })}
              <Grid
                item
                xs={12 - numberOfSets - 1}
                sm={12 - numberOfSets - 1}
                md={12 - numberOfSets - 1}
                sx={{ margin: "0.5rem 0 -1rem 0" }}
              >
                <Divider />
              </Grid>
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                sx={{ padding: "0rem 0 0.2rem 0", margin: "-0.1rem 0 0 0" }}
              >
                <b className='b'>SET</b>
              </Grid>
              {[...new Array(numberOfSets)].map((_, i) => {
                return (
                  <Grid item xs={1} sm={1} md={1}>
                    <Typography
                      sx={{ fontSize: "0.8rem", textAlign: "center" }}
                      color='text.secondary'
                    >
                      {i + 1}
                    </Typography>
                  </Grid>
                );
              })}
              <Grid
                item
                xs={12 - numberOfSets}
                sm={12 - numberOfSets}
                md={12 - numberOfSets}
              >
                <Typography variant='h5' component='div'>
                  Player 2
                </Typography>
              </Grid>
              {[...new Array(numberOfSets)].map((_, i) => {
                return (
                  <Grid item xs={1} sm={1} md={1}>
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        textAlign: "center",
                        border: "0.1px solid #333",
                      }}
                      color='text.secondary'
                    >
                      <b className='b'>{i >= 3 ? " " : i * i}</b>
                    </Typography>
                  </Grid>
                );
              })}
              {/* <Grid
                item
                xs={12}
                sm={12}
                md={12}
                sx={{ margin: '-0.5rem 0 -1rem 0' }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={0} sm={4} md={6}>
                    <Divider />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    md={6}
                    sx={{
                      margin: '-0.5rem auto 0 auto',
                    }}
                  >
                    <Grid container spacing={3} columns={10}>
                      <Grid item md={3}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          <b className="b">SET</b>
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          1
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          2
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          3
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          4
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          5
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          6
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Typography
                          sx={{ fontSize: '0.8rem' }}
                          color='text.secondary'
                        >
                          7
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={4}>
                <Typography variant='h5' component='div'>
                  Player 2
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4} md={8}>
                <Typography
                  sx={{ mb: 1.5, float: 'right' }}
                  color='text.secondary'
                >
                  Scores
                </Typography>
              </Grid> */}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
