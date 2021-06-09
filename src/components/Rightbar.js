import SimpleCard from './Sidebardash'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import app from 'firebase'
import { NotificationsOutlined } from '@material-ui/icons'
import {Link} from 'react-router-dom'

const Rightbar = () => {
    return (
        <div className="Right" >
            <Grid container direction='column' justify='flex-start' spacing={1}>
                <Grid item xs={12}>
                    <Grid container direction='row' justify='flex-end' spacing={1} alignItems='center'>
                        <Grid item>
                            <Button component={Link} to='/Notifications'><NotificationsOutlined/></Button>
                        </Grid>
                        <Grid item >
                            <Button variant='outlined' onClick={()=>app.auth().signOut()}>Logout</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <h6>Popular Projects</h6>
                    <SimpleCard />
                </Grid>
            </Grid>
        </div>
    )
}

export default Rightbar
