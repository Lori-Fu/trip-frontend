import * as React from "react";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonJoy from "@mui/joy/Button";
import Link from "@mui/material/Link";

export default function Step4({ uploading, success, articleId }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        marginTop: 5,
      }}
    >
      {uploading == true ? (
        <>
          <Typography variant="h5" gutterBottom>
            Uploading... Please sit tight...
          </Typography>
          <ButtonJoy loading variant="plain">
            Uploading...
          </ButtonJoy>
        </>
      ) : success == true ? (
        <>
          <Typography variant="h5" gutterBottom>
            Successfully published!
          </Typography>
          <Link href={`/article/${articleId}`}>View Article</Link>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Something went wrong. Please try again later...
        </Typography>
      )}
    </Box>
  );
}
