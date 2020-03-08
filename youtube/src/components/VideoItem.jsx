import React from 'react'
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>{
return(
    <div className="" onClick={()=>onVideoSelect(video)}>
    <li className="list-group-item">
    <img alt={video.snippet.title} 
    className="video-item rounded img-thumbnail" 
    src={video.snippet.thumbnails.medium.url} />
    {video.snippet.title}
    </li>
    </div>
);
};

export default VideoItem;

