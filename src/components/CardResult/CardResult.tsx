import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Result } from "../../types";
import StyledComponents from "./styles";
import { Avatar } from "@mui/material";

const { MyTypography, MyA } = StyledComponents;

interface Props {
  result: Result;
}

export default function CardResult(props: Props) {
  const { result } = props;

  return (
    <Box sx={{}}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <MyTypography variant="subtitle1">{result.name}</MyTypography>
        </Grid>
        <Grid item md={3}>
          <MyA href={result.url} target="_blank">
            {result.url}
          </MyA>
        </Grid>
        <Grid item md={3}>
          <MyTypography variant="subtitle1">{result.snippet}</MyTypography>
        </Grid>
        <Grid item md={3}>
          <Avatar
            alt="Remy Sharp"
            src={result.thumbnailUrl}
            sx={{ width: 100, height: 100 }}
          />
        </Grid>
      </Grid>
      <hr />
    </Box>
  );
}
