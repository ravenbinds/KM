import logo from "../Logo.svg"
import { mainListItems, secondaryListItems } from './Dashboard/listItems';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const Leftbar = () => {
    return (
        <div className="Left">
            <img src={logo} alt="KM" />
            <Divider />
            <List>{mainListItems}</List>
            <Divider />
            <List>{secondaryListItems}</List>
        </div>
    )
}

export default Leftbar
