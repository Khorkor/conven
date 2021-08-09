import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Typography } from "@material-ui/core";
import Cards from "./cards";
import { MenuItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    float: "right",
    color: theme.palette.text.secondary,
    marginBottom: "10px",
    boxShadow: "none",
    marginTop: "-40px",
  },
  paper2: {
    textAlign: "center",
    color: theme.palette.text.secondary,

    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ViewList = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {/* style={{ marginTop: "30px", borderBottom: "1px solid #A8A8A8" }} */}
        <section
          style={{
            marginTop: "30px",
            width: "100%",
            borderBottom: "1px solid #A8A8A8",
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "#888888",
              flexGrow: 1,
              fontSize: "12px",
            }}
          >
            properties for rent in
            <Typography
              inline
              variant="h6"
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000",
                marginBottom: "8px",
              }}
            >
              Sao Paulo, Sp
            </Typography>
          </Typography>

          <Paper className={classes.paper}>
            <Button
              disableRipple
              variant="outlined"
              size="small"
              style={{ textTransform: "none", marginRight: "10px" }}
            >
              <FilterListIcon> </FilterListIcon>
              Filter
            </Button>
            <Button
              disableRipple
              variant="outlined"
              size="small"
              style={{ textTransform: "none" }}
            >
              <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
              Locate
            </Button>
          </Paper>
        </section>
        <Grid item xs={12} sm={8} container>
          <Typography
            variant="h6"
            style={{
              color: "#888888",
              flexGrow: 1,
              fontSize: "12px",
              marginTop: "10px",
            }}
          >
            Start {">"} Sao Paulo, Sp
          </Typography>
        </Grid>

        <Typography
          variant="h6"
          style={{
            color: "#000",
            flexGrow: 1,
            fontSize: "12px",
            marginTop: "30px",
            fontWeight: "bold",
          }}
        >
          8.2000 properties found in this region and surroundings
        </Typography>
        <Paper className={classes.paper2}>
          <MenuItem
            disableRipple
            disableGutters
            value=""
            style={{
              marginTop: "20px",
              border: "1px solid grey",
              width: "145px",
              borderRadius: "6px",
            }}
          >
            <ListItemIcon>
              <ArrowDropDownIcon />
            </ListItemIcon>
            <ListItemText
              primary="Most Relevant"
              style={{
                margin: "-10px 20px -10px -30px",
              }}
            />
          </MenuItem>
        </Paper>

        <Cards />
      </Grid>
    </div>
  );
};

export default ViewList;
