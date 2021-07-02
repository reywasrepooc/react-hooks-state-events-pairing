import video from "../data/video.js";
import Header from "./Header.js"
import VideoViews from "./VideoViews.js"
import VideoLikes from "./VideoLikes.js"
import VideoComments from "./VideoComments.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src= {video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />

      <Header
       title={video.title}
       /> 
       <VideoViews />
       <VideoLikes />
       <VideoComments 
       object={video.comments}/>


    </div>

    
  );
}

export default App;
