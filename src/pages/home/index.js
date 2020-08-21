import React, { useState } from "react";
import {
  Grid,
  Paper,
  makeStyles,
  TextField,
  TextareaAutosize,
  Button,
} from "@material-ui/core/";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 700,
    width: 500,
    marginBottom: 165,
    padding: 10,
  },
  control: {
    padding: theme.spacing(2),
  },
  button: {
    marginLeft: 200,
  }
}));


export default function Home() {
  const classes = useStyles();
  const [name, setName] = useState("");
  
  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const saveTask = () => {
  
    console.log(name)
  
  }
  return (
    <div className={classes.root}>
      <h1>Home</h1>
      <Grid container justify="space-around">
        <Paper className={classes.paper}>
          <h3>Form</h3>
          <TextField className="text-field" label="Name" variant="filled"  onChange={onChangeName}/>
          <TextareaAutosize
            className="text-area"
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Description"
          />
          <Button
            className={classes.button}
            onClick={saveTask}
            variant="contained"
            size="large"
            color="primary"
          >
            Done
          </Button>
        </Paper>

        <Paper className={classes.paper}>
          <h3>Tasks</h3>
        </Paper>
      </Grid>
    </div>
  );
}
