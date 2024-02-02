import * as React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import StyledComponents from "./styles";
import { Result } from "../../types";
import CardResult from "../CardResult/CardResult";
import { Paper } from "@mui/material";

const { MyAppBar, MyTypography } = StyledComponents;

interface Props {
  results: Array<Result>;
}

export default function ListResults(props: Props) {
  const { results } = props;
  return (
    <React.Fragment>
      <Container>
        <MyAppBar position="static">
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <MyTypography variant="h6">Header</MyTypography>
              </Grid>
              <Grid item md={3}>
                <MyTypography variant="h6">URL</MyTypography>
              </Grid>
              <Grid item md={3}>
                <MyTypography variant="h6">Abstract</MyTypography>
              </Grid>
              <Grid item md={3}>
                <MyTypography variant="h6">Imagen</MyTypography>
              </Grid>
            </Grid>
          </Toolbar>
        </MyAppBar>
        <Paper variant="outlined" square>
          {results.length > 0 &&
            results.map((result, index) => {
              return (
                <div key={index + 1}>
                  <CardResult result={result} />
                </div>
              );
            })}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
