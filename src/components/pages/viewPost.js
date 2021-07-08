import React from 'react'
import Post from './Post'
const viewPost = (props) => {
    console.log("ab", props.location.aboutProps)
    const docid = props.location.aboutProps.docid
    const nickname = props.location.aboutProps.nickname
    const avatar = props.location.aboutProps.avatar
    const caption = props.location.aboutProps.caption
    const image = props.location.aboutProps.image
    const likes = props.location.aboutProps.likes
    const share = props.location.aboutProps.share
    const comment = props.location.aboutProps.comment
    const timestamp = props.location.aboutProps.timestamp

    return (
        <div className="Contents">

            <Post id={docid} nickname={nickname} avatar={avatar} caption={caption} image={image} likes={likes} share={share} comment={comment} timestamp={timestamp} />
        </div>
    )
}


export default viewPost

viewPost.defaultProps = {
    id: '1tBClZu6L13rZZ59HH7t',
}
