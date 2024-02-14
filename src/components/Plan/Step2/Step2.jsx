import * as React from "react";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import ShowAttractions from "./ShowAttractions";
import Itinerary from "./Itinerary";
import AddTextArea from "./AddTextArea";
import AddIcon from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function Step2({
  setActiveStep,
  widgets,
  setWidgets,
  articleBody,
  setArticleBody,
  availableAttractions,
  chosenAttractions,
  setChosenAttractions,
}) {
  const [tabNum, setTabNum] = useState(0);
  const [disableNext, setDisableNext] = useState(true);

  const addDay = () => {
    setWidgets((widgets) => [...widgets, []]);
    setArticleBody((article) => [...article, []]);
    setTabNum(widgets.length);
  };

  const deleteDay = (i) => {
    setWidgets((widgets) => widgets.filter((_, index) => index !== i));
    if (i <= tabNum) {
      setTabNum((tabNum) => tabNum - 1);
    }
  };

  const removeStop = (i) => {
    let toDelete;
    setWidgets(
      widgets.map((widget, index) => {
        if (index == tabNum) {
          toDelete = widget[i];
          return [...widget.slice(0, i), ...widget.slice(i + 1)];
        }
        return widget;
      })
    );
    toDelete = parseInt(toDelete.id);
    let indexToRemove = chosenAttractions.indexOf(toDelete);
    setChosenAttractions([
      ...chosenAttractions.slice(0, indexToRemove),
      ...chosenAttractions.slice(indexToRemove + 1),
    ]);
  };

  const handleChange = (event, newValue) => {
    if (newValue < 0) {
      newValue = 0;
    }
    setTabNum(newValue);
  };

  const handleOnDrop = (e) => {
    const id = e.dataTransfer.getData("id");
    const attraction = e.dataTransfer.getData("attraction");
    const address = e.dataTransfer.getData("address");

    setWidgets(
      widgets.map((widget, index) => {
        if (index == tabNum) {
          return [
            ...widget,
            { id: id, attraction: attraction, address: address },
          ];
        }
        return widget;
      })
    );

    setChosenAttractions([...chosenAttractions, parseInt(id)]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function fetch() {}
    fetch();
  }, []);

  useEffect(() => {
    if (
      widgets.some((subList) => Array.isArray(subList) && subList.length === 0)
    ) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [widgets]);

  if (widgets)
    return (
      <>
        <Container
          sx={{
            marginTop: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            {availableAttractions ? (
              <ShowAttractions
                tabNum={tabNum}
                attractions={availableAttractions}
                chosenAttractions={chosenAttractions}
              />
            ) : (
              <Typography variant="body1">Loading...</Typography>
            )}
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
              }}
            >
              <Tabs
                value={tabNum}
                onChange={handleChange}
                aria-label="basic tabs"
              >
                {widgets.map((widget, index) => {
                  return (
                    <Tab
                      key={index}
                      label={
                        <Box sx={{ color: "grey" }}>
                          <Typography variant="body2">{`Day ${
                            index + 1
                          }`}</Typography>
                          <Close
                            sx={{
                              fontSize: "13px",
                              position: "absolute",
                              top: 0,
                              right: 0,
                              p: 0,
                              ":hover": {
                                color: "blue",
                              },
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteDay(index);
                            }}
                          />
                        </Box>
                      }
                      sx={{
                        position: "relative",
                        p: 0,
                      }}
                      {...a11yProps(index)}
                    />
                  );
                })}
              </Tabs>
              <Button
                onClick={() => {
                  addDay();
                }}
              >
                <AddIcon />
              </Button>
            </Box>
            {widgets.map((widget, index) => {
              return (
                <CustomTabPanel key={index} value={tabNum} index={index}>
                  <Grid container spacing={6}>
                    <Grid item md={8} xs={6} sx={{ minHeight: "60vh" }}>
                      <Itinerary itinerary={widget} />
                    </Grid>
                    <Grid item md={4} xs={6}>
                      <Box
                        onDrop={handleOnDrop}
                        onDragOver={handleDragOver}
                        sx={{
                          border: "1px dotted grey",
                          padding: 2,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {widget.length > 0 ? (
                          widget.map((w, index) => {
                            return (
                              <Button
                                key={index}
                                variant="outlined"
                                sx={{
                                  position: "relative",
                                  marginBottom: 3,
                                }}
                              >
                                {w.attraction}
                                <Close
                                  sx={{
                                    position: "absolute",
                                    right: 6,
                                    fontSize: "13px",
                                    ":hover": {
                                      color: "white",
                                      backgroundColor: "grey",
                                      borderRadius: "50%",
                                    },
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeStop(index);
                                  }}
                                />
                              </Button>
                            );
                          })
                        ) : (
                          <Typography variant="body1">
                            Drag Attractions Here
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <Box
                        sx={{
                          padding: 1,
                        }}
                      >
                        <AddTextArea
                          tabNum={tabNum}
                          articleBody={articleBody}
                          setArticleBody={setArticleBody}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </CustomTabPanel>
              );
            })}
          </Box>
        </Container>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={() => setActiveStep(0)} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
          <Button
            variant="contained"
            onClick={() => setActiveStep(2)}
            disabled={disableNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {"Next"}
          </Button>
        </Box>
      </>
    );
}
