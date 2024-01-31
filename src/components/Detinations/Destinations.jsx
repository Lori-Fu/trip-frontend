import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Region from "./Region";
import Container from "@mui/material/Container";
import HotDestinations from "../Homepage/HotDestinations";

export default function Destinations() {
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

  return (
    <Container maxWidth="lg" sx={{ marginY: 4 }}>
      <main>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <HotDestinations />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              All Destinations
            </Typography>
            <Divider />

            {Object.keys(states).map((region, index) => {
              return (
                <div key={index}>
                  <Region region={region} state={states[region]} />
                  {index != Object.keys(states).length - 1 && <Divider />}
                </div>
              );
            })}
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}
