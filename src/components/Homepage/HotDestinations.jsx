import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Region from "../Detinations/Region.jsx";

const HotDestinations = () => {
  const regularTitle = "Popular To Go";
  const regularRecommentations = [
    { state: "New York", abbr: "NY" },
    { state: "Washington, D.C.", abbr: "DC" },
    { state: "Florida", abbr: "FL" },
    { state: "Alaska", abbr: "AK" },
    { state: "California", abbr: "CA" },
    { state: "Colorado", abbr: "CO" },
    { state: "Hawaii", abbr: "HI" },
    { state: "Utah", abbr: "UT" },
  ];

  const seasonalTitle = "Good for Winter❄️⛄️";
  const seasonalRecommentations = [
    { state: "Florida", abbr: "FL" },
    { state: "Alaska", abbr: "AK" },
    { state: "California", abbr: "CA" },
    { state: "Colorado", abbr: "CO" },
    { state: "Hawaii", abbr: "HI" },
  ];
  const hotDestinations = {
    [regularTitle]: regularRecommentations,
    [seasonalTitle]: seasonalRecommentations,
  };
  return (
    <>
      <Typography component="h6" variant="h6">
        Popular Destinations
      </Typography>
      <Divider />

      {Object.keys(hotDestinations).map((region, index) => {
        return (
          <div key={index}>
            <Region region={region} state={hotDestinations[region]} />
            {index != Object.keys(hotDestinations).length - 1 && <Divider />}
          </div>
        );
      })}
    </>
  );
};

export default HotDestinations;
