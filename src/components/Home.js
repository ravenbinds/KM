import React from 'react'
import app from 'firebase'
import { Grid } from '@material-ui/core'

function Home() {
    return (
        <Grid>
            <h1>Home</h1>
            <button>Sign in</button>
            <button onClick={()=> app.auth().signOut()}>Sign out</button>
            <button>Sign in</button>
        </Grid>
    )
}

export default Home
