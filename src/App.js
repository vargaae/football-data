import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomePage, CompetitionPage, EventPage } from "./pages";
import "./App.scss";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "14161a",
    minHeight: "100vh",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<CompetitionPage />} />
        <Route path="/:id/:id" element={<EventPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
