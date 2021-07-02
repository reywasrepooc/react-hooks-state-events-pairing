import React, { useState } from "react"
import video from "../data/video"

const VideoComments = () => {
    // const handleClick = () => {
    //     const []
    // }
    const getComments = video.comments.map((object) => {
            return (
                <>
                <p>{object.user}</p>
                <p>{object.comment}</p>
                </>
            )
        })
    const [isHidden, setIsHidden] = useState(true)
    const handleClick = () => {
        setIsHidden(!isHidden)    
    }
    return (
        <>
        <br/>
        <button onClick={handleClick}>{isHidden ? "Hide Comments" : "Show Comments"}</button>
        <hr></hr>
        <h3>2 Comments</h3>
        {isHidden ? <h4>{getComments}</h4> : null}
        </>
    )

}
export default VideoComments

