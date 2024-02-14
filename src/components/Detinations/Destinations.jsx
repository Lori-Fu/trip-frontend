import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Region from "./Region";
import Container from "@mui/material/Container";
import HotDestinations from "../Homepage/HotDestinations";
import { states } from "../../constant";

export default function Destinations() {
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
