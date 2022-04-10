import {
  Box,
  Card,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import Points from "./Points";

const RankingCard = ({ loading, eventData }) => {
  const totalPoints = !loading && eventData.length && eventData[0].totPoints;
  return (
    <Grid container>
      {loading ? (
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <CircularProgress
            sx={{ color: "#FF7777", margin: "2rem auto -1rem auto" }}
          />
        </Box>
      ) : (
        eventData &&
        eventData.map((event, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                borderRadius: 0,
                background:
                  "linear-gradient(to right bottom, #332861 30%, #001220 100%)",
                margin: "0.5rem",
                padding: { xs: "0.5rem", md: "1rem" },
                color: "#fff",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: { xs: "6vw", sm: "1.5rem" },
                      textTransform: "capitalize",
                    }}
                  >
                    {event.userName.toLowerCase()}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ fontSize: { xs: "3vw", sm: "0.75rem" } }}
                  >
                    {event.academy}
                  </Typography>
                </Box>
                <Points points={event.totPoints} total={totalPoints} />
              </Box>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default RankingCard;
