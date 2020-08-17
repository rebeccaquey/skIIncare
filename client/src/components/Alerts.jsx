import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import EachAlert from './EachAlert.jsx';
import AddModal from './AddModal.jsx';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1,

  },
  title: {
    fontSize: 14,
  },
  paper: {
    // position: 'absolute',
    // width: 400,
    // backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const Alerts = (props) => {
  const classes = useStyles();
  let firstCol = [];
  let secondCol = [];
  for (let i = 0; i < props.alerts.length; i++) {
    if (i % 2 === 1) {
      secondCol.push(props.alerts[i]);
    } else {
      firstCol.push(props.alerts[i]);
    }
  }
  return (
    <div className={classes.root} style={{maxHeight: 600, overflow: 'auto'}}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <Typography gutterBottom variant="h4" component="h2">Alerts</Typography>
          </Grid>
          <Grid item xs={1} >
            <AddModal currentModal={'Alert'} handleAdd={props.handleAdd} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {firstCol.map((alert, i) => (
                <EachAlert alert={alert} key={i} />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              {secondCol.map((alert, i) => (
                <EachAlert alert={alert} key={i} />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </div>
  )
}

export default Alerts;