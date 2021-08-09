import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import ViewList from "./components/viewList";
import SimpleMap from "./components/simplemap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ color: "#505050" }}>
        Listing View
      </Typography>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={8} container>
            <ViewList></ViewList>
          </Grid>
          <SimpleMap />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
