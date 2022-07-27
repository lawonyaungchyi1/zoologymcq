import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Question from "./components/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Question />
        <ToastContainer />
      </Container>
    </>
  );
}

export default App;
