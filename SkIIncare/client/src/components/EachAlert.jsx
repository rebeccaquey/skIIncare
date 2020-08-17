import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});


const EachAlert = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{margin: '5px'}} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {props.alert.frequency}
        </Typography>
        <Typography>
          {props.alert.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EachAlert;