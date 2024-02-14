import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Box from "@mui/material/Box";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SearchResult from "./SearchResult";
import axios from "axios";

const Search = () => {
  const navigate = useNavigate();
  const { searchKey } = useParams("searchKey");
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [attractionResult, setAttractionResult] = useState();

  useEffect(() => {
    async function fetch() {
      if (!searchKey || searchKey == "") {
        const { data } = await axios.get("/api/article/hot");
        setResult(data.data);
      } else {
        const { data } = await axios.get(`/api/search/search/${searchKey}`);
        setResult(data.data.article);
        setAttractionResult(data.data.attraction);
      }
    }
    fetch();
  }, [searchKey]);

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
      <main>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            spacing={1}
            direction="row"
            sx={{ mb: 2, mt: 2, width: "60%" }}
          >
            <FormControl sx={{ flex: 1 }}>
              <Input
                placeholder=""
                value={searchTerm}
                startDecorator={<SearchRoundedIcon />}
                aria-label="Search"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </FormControl>
            <Button
              variant="solid"
              color="primary"
              onClick={() => {
                navigate(`/search/${searchTerm}`);
              }}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <SearchResult attraction={attractionResult} articles={result} />
      </main>
    </Container>
  );
};

export default Search;
