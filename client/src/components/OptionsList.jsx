import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    '&:hover': {
      color: 'green',
      cursor: 'pointer',
    }
  },
}));

const OptionsList = (props) => {
  const classes = useStyles();
  return (
    <div onClick={props.handleClick}>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{props.category}</Typography>
    </div>
  )
}

export default OptionsList;