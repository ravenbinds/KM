import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Add } from '@material-ui/icons';
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import ActionButton from './ActionButton';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    // width: '40rem',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid' + theme.palette.primary ,
    borderRadius: '8px' ,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
  <Dialog open={open} maxWidth="lg" classes={{paper: classes.dialogWrapper}}>
  <DialogTitle>
      <div style={{display: 'flex'}}>
          <Typography variant="h6" style={{flexGrow:1}}>
              {props.title}
          </Typography>
          <ActionButton onClick={() => setOpen(false)}>
              <Close fontSize='small'/>
          </ActionButton>
      </div>
      
  </DialogTitle>
  <DialogContent dividers>
      {props.body}
  </DialogContent>
</Dialog>
);

  return (
    <div>
      <Button type="button" variant='outlined' color='primary' startIcon={<Add/>} onClick={handleOpen}>
        {props.title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
            {body}
        </div>
      </Modal>
    </div>
  );
}
