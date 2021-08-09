import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
}));

export const Slider = (props) => {
  var items = [
    {
      name: "Random Name #1",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      name: "Random Name #2",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    },
    {
      name: "Random Name #2",
      image:
        "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    },
    {
      name: "Random Name #2",
      image:
        "https://images.unsplash.com/photo-1602595688238-9fffe12d5af3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    },
  ];

  const classes = useStyles();

  return (
    <Carousel
      indicatorIconButtonProps={{
        style: {
          padding: "5px", // 1
          color: "white", // 3
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "black", // 2
        },
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "-30px", // 5
        },
      }}
      autoPlay={false}
      animation="slide"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      <img style={{ width: "100%", height: "150px" }} src={props.item.image} />
    </Paper>
  );
}

export default Slider;
