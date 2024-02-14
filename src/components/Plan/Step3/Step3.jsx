import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/joy/FormControl";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import AddHeadArea from "./AddHeadArea";
import AddHeaderArea from "./AddHeaderArea";
import AddTailArea from "./AddTailArea";
import CoverUpload from "./CoverUpload";

export default function Step3({
  articleHead,
  setArticleHead,
  articleTail,
  setArticleTail,
  selectedVisibility,
  setSelectedVisibility,
  setActiveStep,
  upload,
  articleHeader,
  setArticleHeader,
  setCover,
}) {
  const handleChange = (event) => {
    setSelectedVisibility(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography component="h1" variant="h5">
            More to say?
          </Typography>
          <Grid container spacing={6}>
            <Grid item md={12} xs={12}>
              <Box
                sx={{
                  padding: 2,
                }}
              >
                <Box sx={{ marginBottom: 2 }}>
                  <AddHeaderArea
                    articleHeader={articleHeader}
                    setArticleHeader={setArticleHeader}
                  />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                  <AddHeadArea
                    articleHead={articleHead}
                    setArticleHead={setArticleHead}
                  />
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                  <AddTailArea
                    articleTail={articleTail}
                    setArticleTail={setArticleTail}
                  />
                </Box>
                <CoverUpload setCover={setCover} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Typography component="h1" variant="h5">
            Please Select Visibility
          </Typography>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControl>
              <RadioGroup
                value={selectedVisibility}
                onChange={(e) => handleChange(e)}
                name="radio-buttons-group"
              >
                <Radio value={1} label="Public" variant="outlined" />
                <Radio value={0} label="Private" variant="outlined" />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => setActiveStep(1)} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            upload();
            setActiveStep(3);
          }}
          sx={{ mt: 3, ml: 1 }}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
