import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Questions } from "../dummydata/Data";
import { NextWeek } from "@mui/icons-material";
import { useSelector } from "react-redux";
import AnswerItem from "./AnswerItem";
import { toast } from "react-toastify";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  color: theme.palette.text.secondary,
}));

const QuestionItem = () => {
  const [indexNum, setIndexNum] = useState(1);
  const [dataArr, setDataArr] = useState([]);

  const nextQuestion = () => setIndexNum(indexNum + 1);

  const prevQuestion = () => setIndexNum(indexNum - 1);

  const notify = () => {
    toast.success(
      <>
        {Questions[indexNum - 1].correctAnswers.map((i) => (
          <div key={Questions[indexNum - 1].correctAnswers.indexOf(i)}>{i}</div>
        ))}
      </>,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  useEffect(() => {
    setDataArr(Questions.filter((item, index) => index + 1 === indexNum));
  }, []);
  useEffect(() => {
    setDataArr(Questions.filter((item, index) => index + 1 === indexNum));
  }, [indexNum]);
  return (
    <>
      <Grid
        item
        xs={12}
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            onClick={prevQuestion}
            disabled={indexNum === 1 ? true : false}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            onClick={nextQuestion}
            disabled={indexNum === Questions.length ? true : false}
          >
            Next
          </Button>
        </div>
        {dataArr.map((q) => (
          <div key={q.question}>
            <Item>
              <Typography variant="h5">Q.{q.question}</Typography>
            </Item>
            {q.answers.map((i) => (
              <AnswerItem key={q.answers.indexOf(i)} item={i} />
            ))}
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={notify}>
            Check
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default QuestionItem;
