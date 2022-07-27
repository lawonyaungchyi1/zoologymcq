import React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import QuestionItem from "./QuestionItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  color: theme.palette.text.secondary,
}));

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Question = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ThemeProvider theme={theme}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h4">
                Zoology:The whole chapter MCQ
              </Typography>
              <Typography variant="h6">Created By --ဒပလုပ်ပါငဇိုး</Typography>
            </Item>
          </Grid>
          <QuestionItem />
        </ThemeProvider>
      </Grid>
    </Box>
  );
};

export default Question;
