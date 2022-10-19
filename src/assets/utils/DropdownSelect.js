import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormHelperText } from "@mui/material";
import Select from "@mui/material/Select";

export default function DropdownSelect({ gender, setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <Box sx={{ width: "100%", margin: "0.5rem 0" }}>
      <FormControl fullWidth>
        <InputLabel id='gender-select-label'>Gender *</InputLabel>
        <Select
          labelId='gender-select-label'
          id='gender-select'
          value={gender}
          label='Gender *'
          onChange={handleChange}
          onClose={(event) =>
            event.target.textContent === ""
              ? setIsClicked(true)
              : setIsClicked(false)
          }
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>
        {isClicked && (
          <FormHelperText sx={{ color: "#e12b1d" }}>
            Mandatory field
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
}
