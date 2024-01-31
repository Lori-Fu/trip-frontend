import * as React from "react";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Step1({
  selectedState,
  setSelectedState,
  setActiveStep,
  getStateAttractions,
}) {
  const states = {
    Northeast: [
      { state: "New York", abbr: "NY" },
      { state: "New Jersey", abbr: "NJ" },
      { state: "Connecticut", abbr: "CT" },
      { state: "Massachusetts", abbr: "MA" },
      { state: "Pennsylvania", abbr: "PA" },
      { state: "Rhode Island", abbr: "RI" },
      { state: "Vermont", abbr: "VT" },
      { state: "New Hampshire", abbr: "NH" },
      { state: "Maine", abbr: "ME" },
      { state: "Maryland", abbr: "MD" },
      { state: "Delaware", abbr: "DE" },
      { state: "Washington, D.C.", abbr: "DC" },
    ],
    Central: [
      { state: "Illinois", abbr: "IL" },
      { state: "Indiana", abbr: "IN" },
      { state: "Iowa", abbr: "IA" },
      { state: "Kansas", abbr: "KS" },
      { state: "Michigan", abbr: "MI" },
      { state: "Minnesota", abbr: "MN" },
      { state: "Missouri", abbr: "MO" },
      { state: "Nebraska", abbr: "NE" },
      { state: "North Dakota", abbr: "ND" },
      { state: "Ohio", abbr: "OH" },
      { state: "South Dakota", abbr: "SD" },
      { state: "Wisconsin", abbr: "WI" },
    ],
    South: [
      { state: "Alabama", abbr: "AL" },
      { state: "Arkansas", abbr: "AR" },
      { state: "Florida", abbr: "FL" },
      { state: "Georgia", abbr: "GA" },
      { state: "Kentucky", abbr: "KY" },
      { state: "Louisiana", abbr: "LA" },
      { state: "Mississippi", abbr: "MS" },
      { state: "North Carolina", abbr: "NC" },
      { state: "Oklahoma", abbr: "OK" },
      { state: "South Carolina", abbr: "SC" },
      { state: "Tennessee", abbr: "TN" },
      { state: "Texas", abbr: "TX" },
      { state: "Virginia", abbr: "VA" },
      { state: "West Virginia", abbr: "WV" },
    ],
    West: [
      { state: "Arizona", abbr: "AZ" },
      { state: "California", abbr: "CA" },
      { state: "Colorado", abbr: "CO" },
      { state: "Idaho", abbr: "ID" },
      { state: "Montana", abbr: "MT" },
      { state: "Nevada", abbr: "NV" },
      { state: "New Mexico", abbr: "NM" },
      { state: "Oregon", abbr: "OR" },
      { state: "Utah", abbr: "UT" },
      { state: "Washington", abbr: "WA" },
      { state: "Wyoming", abbr: "WY" },
    ],
    Other: [
      { state: "Alaska", abbr: "AK" },
      { state: "Hawaii", abbr: "HI" },
    ],
  };

  const [currentState, setCurrentState] = useState(selectedState);
  let allStates = [];
  for (let i = 0; i < Object.keys(states).length; i++) {
    allStates = allStates.concat(states[Object.keys(states)[i]]);
  }

  const sortByLetter = (a, b) => {
    const nameA = a.state.toUpperCase();
    const nameB = b.state.toUpperCase();
    return nameA.charCodeAt(0) - nameB.charCodeAt(0);
  };

  // Sorting the array
  const sortedData = allStates.sort(sortByLetter);

  const handleChange = (event) => {
    setCurrentState(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Please Select Your Destination
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            mt: 3,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Select
            sx={{ width: "30%" }}
            value={currentState}
            onChange={handleChange}
          >
            <MenuItem value="default" disabled>
              Select an option
            </MenuItem>
            {sortedData.map((s, index) => {
              return (
                <MenuItem key={index} value={s.abbr}>
                  {s.state}
                </MenuItem>
              );
            })}
          </Select>
          {/* <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Start Plan
          </Button> */}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          onClick={() => {
            if (currentState != selectedState) {
              getStateAttractions(currentState);
            }
            setActiveStep(1);
          }}
          disabled={currentState == "default"}
          sx={{ mt: 3, ml: 1 }}
        >
          {"Next"}
        </Button>
      </Box>
    </>
  );
}
