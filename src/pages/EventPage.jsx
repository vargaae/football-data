import React from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import {
  footballApi,
  useGetMatchDetailsQuery,
} from "../features/Api/FootballApi";

const EventPage = (matchId) => {
  const { id } = useParams();

  const { data: match, isFetching } = useGetMatchDetailsQuery(id);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      backgroundColor: "#2B2D2F",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
      textAlign: "center",
      color: "white",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "center",
      color: "white",
    },
  }));

  const classes = useStyles();

  if (isFetching) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <>
      <Typography
        variant="subtitle1"
        className="breadcrumbs"
        style={{
          fontWeight: "bold",
          fontFamily: "Montserrat",
          color: "white",
        }}
      >
        <Link to="/">COMPETITONS</Link> {">"}{" "}
        <Link to={`/${match?.match?.competition?.id}`}>
          {match?.match?.competition?.name}
        </Link>{" "}
        {">"} {match?.match?.group} {match?.match?.homeTeam?.name} -{" "}
        {match?.match?.awayTeam?.name} MATCH'S DETAILS
      </Typography>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography
                variant="h4"
                className="title"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "#2B2D2F",
                }}
              >
                <a href="">
                  {match?.match?.group} {match?.match?.homeTeam?.name} -{" "}
                  {match?.match?.awayTeam?.name}
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Typography variant="subtitle1" className="title">
          {new Date(match?.match?.utcDate).toLocaleString()}
        </Typography>
        <Typography variant="h5" className={classes.description}>
          MATCH STATUS: {match?.match?.status}
        </Typography>
        <Typography variant="subtitle1" className="title">
          Match Clock
        </Typography>
        <Typography variant="h5" className={classes.description}>
          {match?.match?.score?.duration}{" "}
        </Typography>
        <Typography variant="subtitle1" className="title">
          SCORE
        </Typography>
        <Typography variant="h5" className={classes.description}>
          {match?.match?.homeTeam?.name}{" "}
          <span className="score">
            {match?.match?.score?.fullTime.homeTeam} -{" "}
            {match?.match?.score?.fullTime.awayTeam}
          </span>{" "}
          {match?.match?.awayTeam?.name}
        </Typography>
        <Typography variant="subtitle1" className="title">
          First Half
        </Typography>
        <Typography variant="h5" className={classes.description}>
          {match?.match?.homeTeam?.name}{" "}
          <span className="score">
            {match?.match?.score?.halfTime.homeTeam} -{" "}
            {match?.match?.score?.halfTime.awayTeam}
          </span>{" "}
          {match?.match?.awayTeam?.name}
        </Typography>
        <Typography variant="subtitle1" className="title">
          Second Half
        </Typography>
        <Typography variant="h5" className={classes.description}>
          {match?.match?.homeTeam?.name}{" "}
          <span className="score">
            {match?.match?.score?.fullTime.homeTeam} -{" "}
            {match?.match?.score?.fullTime.awayTeam}
          </span>{" "}
          {match?.match?.awayTeam?.name}
        </Typography>
      </div>
    </>
  );
};

export default EventPage;
