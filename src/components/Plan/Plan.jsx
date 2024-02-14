import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Step1 from "./Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4";
import axios from "axios";
import { uploadFileToS3 } from "./aws";

const steps = [
  "Select Your Destination",
  "Build Your Itinerary",
  "Other Content and Visibility",
  "Complete",
];

function getStepContent(
  activeStep,
  selectedState,
  widgets,
  selectedVisibility,
  setSelectedState,
  setWidgets,
  setSelectedVisibility,
  setActiveStep,
  articleBody,
  setArticleBody,
  articleHead,
  setArticleHead,
  articleTail,
  setArticleTail,
  uploading,
  upload,
  success,
  articleId,
  articleHeader,
  setArticleHeader,
  getStateAttractions,
  availableAttractions,
  chosenAttractions,
  setChosenAttractions,
  setCover
) {
  switch (activeStep) {
    case 0:
      return (
        <Step1
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          setActiveStep={setActiveStep}
          getStateAttractions={getStateAttractions}
        />
      );
    case 1:
      return (
        <Step2
          selectedState={selectedState}
          widgets={widgets}
          setWidgets={setWidgets}
          setActiveStep={setActiveStep}
          articleBody={articleBody}
          setArticleBody={setArticleBody}
          availableAttractions={availableAttractions}
          chosenAttractions={chosenAttractions}
          setChosenAttractions={setChosenAttractions}
        />
      );
    case 2:
      return (
        <Step3
          articleHead={articleHead}
          setArticleHead={setArticleHead}
          articleTail={articleTail}
          setArticleTail={setArticleTail}
          selectedVisibility={selectedVisibility}
          setSelectedVisibility={setSelectedVisibility}
          setActiveStep={setActiveStep}
          upload={upload}
          articleHeader={articleHeader}
          setArticleHeader={setArticleHeader}
          setCover={setCover}
        />
      );
    case 3:
      return (
        <Step4 uploading={uploading} success={success} articleId={articleId} />
      );
    default:
      throw new Error("Unknown step");
  }
}

export default function Plan() {
  const user = useSelector((state) => state.user);

  const [activeStep, setActiveStep] = useState(0);
  const [selectedState, setSelectedState] = useState("default");
  const [widgets, setWidgets] = useState([[]]);
  const [articleHeader, setArticleHeader] = useState("");
  const [articleBody, setArticleBody] = useState([""]);
  const [articleHead, setArticleHead] = useState("");
  const [articleTail, setArticleTail] = useState("");

  const [selectedVisibility, setSelectedVisibility] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [articleId, setArticleId] = useState();

  const [availableAttractions, setAvailableAttractions] = useState([]);
  const [chosenAttractions, setChosenAttractions] = useState([]);
  const [cover, setCover] = useState();

  const getStateAttractions = async (currentState) => {
    setSelectedState(currentState);
    const { data } = await axios.get(
      `/api/destination/${currentState}/attractions`
    );
    setAvailableAttractions(data.data);
    setChosenAttractions([]);
    setWidgets([[]]);
  };

  const upload = async () => {
    setUploading(true);
    let imageUrl = await uploadFileToS3(cover, selectedState);

    await axios
      .post(
        "/api/article/new",
        {
          state: selectedState,
          day_count: widgets.length,
          title: articleHeader,
          content_body: articleBody,
          content_head: articleHead,
          content_tail: articleTail,
          itinerary: widgets,
          visibility: selectedVisibility,
          cover_url: imageUrl,
        },
        {
          headers: {
            Token: user.token,
          },
        }
      )
      .then((response) => {
        console.log("response");
        console.log(response);
        setArticleId(response.data.data);
        setUploading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setUploading(false);
        setSuccess(false);
        alert("Error");
        setActiveStep(2);
      });
  };

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
      <main>
        <Container>
          <Box
            sx={{
              mt: 6,
            }}
          >
            <Stepper activeStep={activeStep}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <React.Fragment>
            {getStepContent(
              activeStep,
              selectedState,
              widgets,
              selectedVisibility,
              setSelectedState,
              setWidgets,
              setSelectedVisibility,
              setActiveStep,
              articleBody,
              setArticleBody,
              articleHead,
              setArticleHead,
              articleTail,
              setArticleTail,
              uploading,
              upload,
              success,
              articleId,
              articleHeader,
              setArticleHeader,
              getStateAttractions,
              availableAttractions,
              chosenAttractions,
              setChosenAttractions,
              setCover
            )}
          </React.Fragment>
        </Container>
      </main>
    </Container>
  );
}
