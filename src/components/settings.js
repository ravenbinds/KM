
import Grid from '@material-ui/core/Grid';
import ProjectLists from './pages/Projectlist';
import UserLists from './pages/Userlist';
import TagsInput from './FormsUI/TagsInput'
import TrackedProjectLists from './pages/trackedProjects';
const Settings = () => {

    const selectedTags = tags => {
        console.log(tags);
    };

    return (
        <div className="Contents">
            <Grid >
                {/* <TagsInput selectedTags={selectedTags} tags={['Nodejs', 'MongoDB']} /> */}
                <ProjectLists />
                <UserLists />
                <TrackedProjectLists userid="7aROHQMUiZXrqavWooPmIyrJVDh2" />
            </Grid>

        </div>
    )
}

export default Settings