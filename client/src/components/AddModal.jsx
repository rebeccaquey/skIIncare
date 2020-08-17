import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';


import AlertModal from './AlertModal.jsx';
import ProductModal from './ProductModal.jsx';


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
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const AddModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [alertData, setAlertData] = useState({
    time: '09:00',
    frequency: '',
    message: '',
  });
  // const [alertInfo, setAlertInfo] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // console.log();
    // props.handleAdd(state, data);
    setOpen(false);
  }

  let modalTitle = props.currentModal;

  let modalMessage = '';
  if (modalTitle === 'Alert') {
    modalMessage = (
      <form className={classes.root} noValidate autoComplete="off">
        <AlertModal data={alertData} />
      </form>
    )
  } else {
    modalMessage = (
      <form className={classes.root} noValidate autoComplete="off">
        <ProductModal category={props.category} />
      </form>
    )
  }


  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <Typography gutterBottom variant="h5" component="h2" className={classes.title}>{`Add ${modalTitle}`}</Typography>
      <div id="simple-modal-description">
        {modalMessage}
      </div>
      <IconButton color="primary" onClick={handleSave}><SaveIcon /></IconButton>
      <IconButton onClick={handleClose}><CloseIcon /></IconButton>
    </div>
  )

  return (
    <div>
      <IconButton color="primary" onClick={handleOpen}><AddIcon /></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalBody}
      </Modal>
    </div>
  )
}

export default AddModal;