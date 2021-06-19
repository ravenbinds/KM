import React, { useState, useEffect } from 'react'
import ProjectLists from './Projectlist';
import UserLists from './Userlist';
import Grid from '@material-ui/core/Grid';
import { db } from '../../firebase';
import ProjectListsnew from './ProjectListnew';
function Searchpage(props) {
    return (
        <div className="Contents">
            <Grid >  Search
                <ProjectListsnew />
                <UserLists />
            </Grid>
        </div>
    )
}
export default Searchpage

Searchpage.defaultProps = {

}


