import { Box } from "@mui/material";
import React from "react";
import ChartContainer from "../../components/chart/container/ChartContainer";
import { ChartContainerModel } from "../../components/chart/model/ChartContainerModel";
import SocialContainer from "../../components/social/container/SocialContainer";
import TournamentUpdatesContainer from "./components/TournamentUpdates/container/TournamentUpdatesContainer";
import UpcomingTournamentsContainer from "./components/UpcomingTournaments/container/UpcomingTournamentsContainer";

const Home = () => {
  return (
    <>
      <Box
        className='relative md:pt-12 pb-32 pt-12'
        sx={{
          backgroundImage: `url(
            "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='300' preserveAspectRatio='none' viewBox='0 0 1440 300'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath1128%26quot%3b)' fill='none'%3e%3crect width='1440' height='300' x='0' y='0' fill='%2332325d'%3e%3c/rect%3e%3ccircle r='22.805' cx='374.36' cy='128.04' fill='url(%23SvgjsLinearGradient1129)'%3e%3c/circle%3e%3ccircle r='17.28' cx='286.27' cy='42.58' fill='url(%23SvgjsLinearGradient1130)'%3e%3c/circle%3e%3ccircle r='19.17' cx='438.9' cy='243.04' fill='url(%23SvgjsLinearGradient1131)'%3e%3c/circle%3e%3ccircle r='13.485' cx='443.18' cy='218.95' fill='url(%23SvgjsLinearGradient1132)'%3e%3c/circle%3e%3ccircle r='23.705' cx='1363.84' cy='158.72' fill='url(%23SvgjsLinearGradient1133)'%3e%3c/circle%3e%3ccircle r='14.05' cx='333.64' cy='280.51' fill='url(%23SvgjsLinearGradient1134)'%3e%3c/circle%3e%3ccircle r='10.85' cx='273.87' cy='174.34' fill='url(%23SvgjsLinearGradient1135)'%3e%3c/circle%3e%3ccircle r='16.6' cx='112.87' cy='135.51' fill='url(%23SvgjsLinearGradient1136)'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath1128'%3e%3crect width='1440' height='300' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3clinearGradient x1='328.75' y1='128.04' x2='419.97' y2='128.04' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1129'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='251.70999999999998' y1='42.58' x2='320.83' y2='42.58' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1130'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='400.55999999999995' y1='243.04' x2='477.23999999999995' y2='243.04' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1131'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='416.21000000000004' y1='218.95' x2='470.15000000000003' y2='218.95' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1132'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1316.4299999999998' y1='158.72' x2='1411.2499999999998' y2='158.72' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1133'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='305.53999999999996' y1='280.51' x2='361.73999999999995' y2='280.51' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1134'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='252.17000000000002' y1='174.34' x2='295.57' y2='174.34' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1135'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='79.67' y1='135.51' x2='146.07' y2='135.51' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1136'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          )`,
        }}
      >
        <Box className='px-4 md:px-10 mx-auto w-full'>
          <TournamentUpdatesContainer />
        </Box>
      </Box>
      <Box className='px-4 md:px-10 mx-auto w-full'>
        <Box>
          <Box className='flex flex-wrap -mt-24'>
            <div className='w-full xl:w-4/12 mb-12 xl:mb-0 px-4'>
              <UpcomingTournamentsContainer />
            </div>
            {ChartContainerModel.map((chart, index) => (
              <Box className={chart.container} key={index}>
                <ChartContainer {...chart} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className='px-4 md:px-10 mx-auto w-full'>
        <Box className='flex flex-wrap mt-4'>
          <Box className='w-full xl:w-12 mb-0 xl:mb-0 px-4'>
            <SocialContainer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
