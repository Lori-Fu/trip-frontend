import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function CoverUpload({ setCover }) {
  const [preview, setPreview] = useState();
  const checkImage = (e) => {
    const image = e.target.files?.[0];
    if (!image || !(image instanceof File)) {
      alert("Please upload a picture.");
      return;
    }
    if (image.size > 10000000) {
      alert("Please upload an image with size &lt; 10MB");
      return;
    }
    if (!image.type.match(/image.*/)) {
      alert("Please upload a picture.");
      return;
    }
    setCover(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <Box>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload cover picture
        <VisuallyHiddenInput
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          onChange={(e) => {
            checkImage(e);
          }}
        />
      </Button>
      <Box sx={{ marginTop: 2 }}>
        {preview && <img src={preview} height={100} />}
      </Box>
    </Box>
  );
}
