import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";

export default function EventSelection({ disabled, setDisabled }) {
  const [state, setState] = React.useState({
    cadetBoys: false,
    cadetGirls: false,
    subjuniorBoys: false,
    subjuniorGirls: false,
    under19Boys: false,
    under19Girls: false,
    mens: false,
    womens: false,
  });
  const [checkedCount, setCheckedCount] = React.useState(0);

  const {
    cadetBoys,
    cadetGirls,
    subjuniorBoys,
    subjuniorGirls,
    under19Boys,
    under19Girls,
    mens,
    womens,
  } = state;

  const error =
    [
      cadetBoys,
      cadetGirls,
      subjuniorBoys,
      subjuniorGirls,
      under19Boys,
      under19Girls,
      mens,
      womens,
    ].filter((v) => v).length > 3;

  setDisabled(
    [
      cadetBoys,
      cadetGirls,
      subjuniorBoys,
      subjuniorGirls,
      under19Boys,
      under19Girls,
      mens,
      womens,
    ].filter((v) => v).length === 3
  );

  const events = [
    { checked: cadetBoys, id: "cadetBoys", name: "Cadet Boys" },
    { checked: cadetGirls, id: "cadetGirls", name: "Cadet Girls" },
    { checked: subjuniorBoys, id: "subjuniorBoys", name: "Sub-Junior Boys" },
    { checked: subjuniorGirls, id: "subjuniorGirls", name: "Sub-Junior Girls" },
    { checked: under19Boys, id: "under19Boys", name: "Under19 Boys" },
    { checked: under19Girls, id: "under19Girls", name: "Under19 Girls" },
    { checked: mens, id: "mens", name: "Mens" },
    { checked: womens, id: "womens", name: "Womens" },
  ];

  const handleChange = (event) => {
    event.target.checked === true
      ? setCheckedCount(checkedCount + 1)
      : setCheckedCount(checkedCount - 1);
    // setCheckedCount(
    //   [
    //     cadetBoys,
    //     cadetGirls,
    //     subjuniorBoys,
    //     subjuniorGirls,
    //     under19Boys,
    //     under19Girls,
    //     mens,
    //     womens,
    //   ].filter((v) => v).length
    // );
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ display: "flex", margin: "0rem", textAlign: "left" }}>
      <FormControl
        required
        error={error}
        component='fieldset'
        sx={{ m: 3 }}
        variant='standard'
      >
        {checkedCount < 3 && (
          <FormLabel component='legend'>Choose atmost 3 events</FormLabel>
        )}
        <FormGroup>
          <Grid container>
            {events.map((event) => (
              <Grid item xs={12} sm={6} key={event.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled={checkedCount === 3 && !event.checked}
                      checked={event.checked}
                      onChange={handleChange}
                      name={event.id}
                    />
                  }
                  label={event.name}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </FormControl>
    </Box>
  );
}
