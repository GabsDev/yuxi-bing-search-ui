import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MyTypography = styled(Typography, {})`
  color: #567189;
  font-size: 15px;
  font-weight: bold;
`;
const MyA = styled("a", {})`
  color: #567189;
  font-size: 15px;
  font-weight: bold;
`;

const MyButton = styled(Button, {})`
  color: white;
  background-color: #f48484;
  width: 175px;
  font-size: 10px;
  margin-top: 3px;
  text-decoration-line: none;

  &:hover {
    background-color: #f55050;
  }
`;
export default {
  MyButton,
  MyTypography,
  MyA,
};
