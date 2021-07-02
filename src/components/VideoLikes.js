import React, { useState } from "react"

const VideoLikes = () => {
    const [upvotes, setUpVotes] = useState(9210)
    const [downvotes, setDownVotes] = useState(185)

    const handleLikes = () => {
        setUpVotes(upvotes + 1)
    }
    const downVotes = () => {
        setDownVotes(downvotes + 1)
    }
    return (
       <>
        <button onClick={handleLikes}>{upvotes} 👍</button>
        <button onClick={downVotes}>{downvotes} 👎</button>
    </>
    )


}
export default VideoLikes