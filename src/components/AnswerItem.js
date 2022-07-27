import { useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  color: theme.palette.text.secondary,
}));

const AnswerItem = ({ item }) => {
  const [click, setClicked] = useState(false);

  return (
    <Item
      style={{
        backgroundColor: `${click ? "#f4f1de" : "transparent"}`,
      }}
      onClick={() => setClicked(!click)}
    >
      <Typography variant="h6">{item}</Typography>
    </Item>
  );
};

export default AnswerItem;
