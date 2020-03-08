import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{

   state = { videos: [], selectedVideo: null };

   componentDidMount(){
       this.onTermSubmit('dogs');
   }
   
   onTermSubmit = async term =>{

     const response = await youtube.get('/search',{
         params:{
             q:term
         }
     });

     this.setState({
         videos: response.data.items, 
         selectedVideo: response.data.items[0]
    });
   };
    
   onVideoSelect = video =>{
       this.setState({selectedVideo: video})
   }

    render(){
     return (
    <div className="" style={{marginTop:'10px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>

        <div className="container">
        <div className="row">
        <div className="col col-md-8">
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className="col col-md-4">
        <VideoList
         onVideoSelect={this.onVideoSelect} 
         videos={this.state.videos} />
         </div>
        </div>
        </div>
    </div>
    );
}
}

export default App;