import React from 'react';
import Profile from './Profile'
import {useUserContext} from '../UserContext'

const Myprofile = () => {

    const currentUser = useUserContext();

    return (
            <Profile userdocumentID={currentUser.uid} />
    )
}

export default Myprofile
