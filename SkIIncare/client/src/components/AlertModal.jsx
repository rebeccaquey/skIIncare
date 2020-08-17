import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    position: 'absolute',
    width: 440,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const options = ['Daily', 'Weekly', 'Monthly', 'Yearly']

const AlertModal = (props) => {
  const classes = useStyles();
  const [frequency, setFrequency] = useState('');
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('09:00');

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
    props.data
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  console.log(props.data)
  console.log(frequency, message, time)
  return (

    <div>
      <span>
        <TextField
          id="time"
          label="Time"
          type="time"
          // defaultValue="09:00"
          value={time}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          variant="outlined"
          onChange={handleTimeChange}
        />
        <TextField
          id="outlined-select-frequency"
          select
          label="Frequency"
          value={frequency}
          onChange={handleFrequencyChange}
          variant="outlined"
        >
          {options.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </span>
      <span>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={3}
          value={message}
          variant="outlined"
          style={{width: 417}}
          onChange={handleMessageChange}
        />
      </span>
    </div>
  )
}

export default AlertModal;