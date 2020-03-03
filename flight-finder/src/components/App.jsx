import React from 'react';
// import aviationstack from '../api/aviationstack';
import SearchBar from './SearchBar';


class App extends React.Component{
    state = { result: [] };

    onSearchSubmit = async ()=>{
     const response = await fetch('http://api.aviationstack.com/v1/flights?access_key=d58ad084710bee755d75f9b432c79a3e'); 
    //  {
    //    params: {flight_date: date},
    //  });

     this.setState({result:response.data});
    }

    

    render(){
     return (
    <div className="" >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>{this.state.result}</p>
    </div>
    );
}
}

export default App;