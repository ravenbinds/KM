
import Grid from '@material-ui/core/Grid';
import ProjectLists from './pages/Projectlist';
import UserLists from './pages/Userlist';
import TagsInput from './FormsUI/TagsInput'

const Settings = () => {

    const selectedTags = tags => {
        console.log(tags);
    };

    return (
        <div className="Contents">
            <Grid >
                <TagsInput selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/>
                <ProjectLists />
                <UserLists />    
            </Grid>
                
        </div>
    )
}

export default Settings