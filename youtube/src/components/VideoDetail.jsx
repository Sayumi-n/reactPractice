import React from 'react'
import './VideoItem.css';

 const VideoDetail = ({video}) =>{

    if(!video){
        return <div>Loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

     return(
     <div className="container video-detail" >
      <div className="row">
        <div className="col col-md-8" >
          <iframe title="video player" src={videoSrc} className="img-fluid" />
        </div>
      </div>
      <div className="row">
       <div className="col col-md-8">
        <h4 className="">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        </div>
      </div>
     </div>
     )
 }

 export default VideoDetail;