import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  bannerContent: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Football App
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Keep track of information about football competitions
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
