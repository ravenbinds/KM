import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ArrowDownward} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function SimpleMenu(props) {

    const {items} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <Button size="small" endIcon={<ArrowDownward/>} variant="outlined" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Add Profile Section
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {
                items.map(item=>(
                    <MenuItem component={Link} to={item.link} onClick={handleClose}>{item.title}</MenuItem>
                ))
            }
        </Menu>
        </div>
    );
}

export default SimpleMenu
