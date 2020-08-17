import React, { useState} from 'react';
import 'date-fns';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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
  title: {
    fontSize: 18,
  }
}));

const sizeOptions = ['Full', 'Deluxe', 'Mini', 'Sample'];

const statusOptions = ['New', 'Opened'];

const ProductModal = (props) => {
  const classes = useStyles();
  const today = new Date(2020, 6, 28);
  const [purchaseDate, setPurchaseDate] = useState(today);
  const [expirationDate, setExpirationDate] = useState(new Date(2022, 6, 28));
  const [size, setSize] = useState('');
  const [status, setStatus] = useState('');

  const handlePurchaseChange = (date) => {
    setPurchaseDate(date);
  };

  const handleExpirationChange = (date) => {
    setExpirationDate(date);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      {/* <div>{`Category: ${props.category}`}</div> */}
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        {`Category: ${props.category.slice(0, -1)}`}
      </Typography>
      <TextField
        id="outlined-helperText"
        label="Product Name"
        variant="outlined"
      />
      <TextField
        id="outlined-number"
        label="Price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Purchase Date"
            value={purchaseDate}
            onChange={handlePurchaseChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-dialog"
            label="Expiration Date"
            value={expirationDate}
            onChange={handleExpirationChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>

      <TextField
          select
          label="Size"
          value={size}
          onChange={handleSizeChange}
          variant="outlined"
        >
          {sizeOptions.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Status"
          value={status}
          onChange={handleStatusChange}
          variant="outlined"
        >
          {statusOptions.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

      <TextField
        id="outlined-multiline-static"
        label="Notes"
        multiline
        rows={3}
        defaultValue=""
        variant="outlined"
        style={{width: 417}}
      />
    </div>
  )
}

export default ProductModal;