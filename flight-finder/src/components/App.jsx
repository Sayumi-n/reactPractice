import React from 'react';
import aviationstack from '../api/aviationstack';
import SearchBar from './SearchBar';


class App extends React.Component{

   state = { results: [] };

//    componentDidMount(){
//        this.onTermSubmit('dogs');
//    }
   
   onTermSubmit = async date =>{

     const response = await aviationstack.get('/flights',{
         params:{
             access_key: `${process.env.REACT_APP_API_KEY}`,
             flight_date: date
         }
     });

     this.setState({
         results: response.data[0], 
    });
   };
    
//    onVideoSelect = video =>{
//        this.setState({selectedVideo: video})
//    }

    render(){
     return (
    <div className="" style={{marginTop:'10px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>


    </div>
    );
}
}

export default App;