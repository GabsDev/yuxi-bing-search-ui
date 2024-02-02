import React, { useCallback, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  styled,
  TextField,
} from "@mui/material";
import _ from "underscore";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Search";
import { Result } from "./types";
import { getResults } from "./services/getResults";
import ListResults from "./components/ListResults/ListResults";

interface AppState {
  results: Array<Result>;
  searchTerm: string;
  startSearch: boolean;
}

const MyTextField = styled(TextField, {})`
  width: 200px;
  border-radius: 50px;
`;
const MyButton = styled(Button, {})`
  color: white;
  background-color: #f48484;
  width: 175px;
  font-size: 10px;
  margin-left: 1px;
  margin-bottom: 1px;

  &:hover {
    background-color: #f55050;
  }
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

function App() {
  const [results, setResults] = useState<AppState["results"]>([]);
  const [startSearch, setStartSearch] =
    useState<AppState["startSearch"]>(false);
  const [searchTerm, setSearchTerm] = useState<AppState["searchTerm"]>("");
  const handleClearSelection = (): void => {
    setSearchTerm("");
    setResults([]);
  };

  const handleSetSearchTerm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    handleSearchFromApi();
  };

  const handleSearchFromApi = useCallback((): void => {
    getResults(searchTerm).then(setResults);
  }, [searchTerm]);

  return (
    <>
      <NavBar />
      <Box sx={{ marginTop: 15 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item sm={2} md={3}></Grid>
            <Grid item sm={8} md={3}>
              <MyTextField
                id="input-with-icon-textfield"
                label="Search term"
                value={searchTerm}
                onChange={handleSetSearchTerm}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item sm={2} md={3}>
              <MyButton
                variant="contained"
                onClick={handleSearch}
                startIcon={<AddIcon />}
              >
                Search
              </MyButton>
            </Grid>
            <Grid item sm={2} md={3}>
              <MyButton
                variant="contained"
                onClick={handleClearSelection}
                startIcon={<AddIcon />}
              >
                Clear selection
              </MyButton>
            </Grid>
          </Grid>
          {!_.isEmpty(results) ? <ListResults results={results} /> : ""}
        </Container>
      </Box>
    </>
  );
}

export default App;
