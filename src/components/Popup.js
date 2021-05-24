import { Button, Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react'
import ActionButton from './controls/ActionButton';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(1),
        position: 'absolute',
        top: theme.spacing(2)
    }
}))

function Popup(props) {

    const classes = useStyles();

    const {title, children, openPopup, setOpenPopup} = props;
    return (
        <Dialog open={openPopup} maxWidth="lg" classes={{paper: classes.dialogWrapper}}>
            <DialogTitle>
                <div style={{display: 'flex'}}>
                    <Typography variant="h6" style={{flexGrow:1}}>
                        {title} 
                    </Typography>
                    <ActionButton onClick={() => setOpenPopup(false)}>
                        <Close fontSize='small'/>
                    </ActionButton>
                </div>
                
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
