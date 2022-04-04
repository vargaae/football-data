import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "#3f51b5",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    fontFamily: "Montserrat",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 10,
    textAlign: "justify",
  },
  codelist: {
    lineHeight: 2,
  },
});

const Competitions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Competitions
      <div className={classes.codelist}>
        <h2>Available Competitions Code List</h2>
        <img height="15px" width="20px" src="" /> | WC | FIFA World Cup
        <br />
        <img height="15px" width="20px" src="" /> | CL | UEFA Champions League
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
        />{" "}
        | BL1 | Bundesliga
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
        />{" "}
        | DED | Eredivisie
        <br />
        <img height="15px" width="20px" src="" /> | BSA | Campeonato Brasileiro
        Série A
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"
        />{" "}
        | PD | Primera Division
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
        />{" "}
        | FL1 | Ligue 1
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
        />{" "}
        | ELC | Championship
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
        />{" "}
        | PPL | Primeira Liga
        <br />
        <img height="15px" width="20px" src="" /> | EC | European Championship
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
        />{" "}
        | SA | Serie A
        <br />
        <img
          height="15px"
          width="20px"
          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
        />{" "}
        | PL | Premier League
        <br />
        <img height="15px" width="20px" src="" /> | CLI | Copa Libertadores
      </div>
    </div>
  );
};

export default Competitions;
