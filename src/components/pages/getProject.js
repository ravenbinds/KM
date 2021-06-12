import React from 'react'
import Projectpage from './Projectpage'
const GetProject = (props) => {
    console.log("ab", props.location.aboutProps)
    const pname = props.location.aboutProps.pname
    return (
        <div className="Contents">

            <Projectpage pname={pname} />
        </div>
    )
}


export default GetProject

GetProject.defaultProps = {
    pname: 'Emotion Detection through Facial Expression',
}
