
import Grid from '@material-ui/core/Grid';
import ProjectLists from './pages/Projectlist';
import UserLists from './pages/Userlist';

const Settings = () => {
    return (
        <div className="Contents">
            <Grid ><ProjectLists />
                <UserLists /></Grid>
        </div>
    )
}

export default Settings
