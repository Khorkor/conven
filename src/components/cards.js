import React from "react";

import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import AirlineSeatIndividualSuiteOutlinedIcon from "@material-ui/icons/AirlineSeatIndividualSuiteOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Slider from "./slider";
import { Paper } from "@material-ui/core";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    padding: "0px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    boxShadow: "none",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export const Cards = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Slider />
                <CardContent className={classes.cardContent}>
                  <Typography
                    style={{
                      color: "#686868",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                    gutterBottom
                  >
                    Home
                  </Typography>
                  <Typography
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "14px",
                      marginTop: "10px",
                    }}
                  >
                    Rua Claudio Rossi
                  </Typography>
                  <Typography
                    style={{
                      color: "#686868",
                      marginTop: "5px",
                      fontSize: "12px",
                    }}
                  >
                    Cambuci, Sao Paulo
                  </Typography>
                  <Typography
                    style={{
                      color: "#686868",
                      marginTop: "10px",
                      fontSize: "12px",
                    }}
                  >
                    <HomeIcon
                      style={{
                        fontSize: "14px",
                        marginTop: "5px",
                        marginBottom: "-2px",
                      }}
                    />
                    50 m<sup>2</sup>
                    <AirlineSeatIndividualSuiteOutlinedIcon
                      style={{
                        fontSize: "16px",
                        margin: "5px 2px -4px 15px",
                      }}
                    />
                    1 Bedroom
                  </Typography>
                </CardContent>
                <CardActions style={{ marginTop: "-12px" }} disableSpacing>
                  <Typography
                    style={{
                      color: "#686868",
                      fontSize: "12px",
                      marginLeft: "10px",
                    }}
                  >
                    Rent 1000$
                    <Typography
                      style={{
                        color: "Green",
                        fontSize: "12px",
                      }}
                    >
                      Total 1037$
                    </Typography>
                  </Typography>

                  <IconButton
                    disableRipple
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <DeleteForeverOutlinedIcon
                      className="icon"
                      style={{
                        color: "grey",
                        border: "1px solid grey",
                        borderRadius: "50%",
                        padding: "3px",
                      }}
                    />
                    <FavoriteBorderIcon
                      style={{
                        color: "grey",
                        border: "1px solid grey",
                        borderRadius: "50%",
                        padding: "3px",
                        marginLeft: "10px",
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Cards;
