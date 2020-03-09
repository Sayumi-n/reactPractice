import React from 'react'
import './App.css'

class StartBtn extends React.Component {
   
state = { term: '' };

onFormSubmit= (e) =>{
    e.preventDefault();

    this.props.onSubmit(this.state.term);
};


    render() {
        return (
        <div className='container startBtnArea'>
           <form onSubmit={this.onFormSubmit} className=''>
               <div className='field' >
               <h1>Fridge Magnet Poetry Generator</h1>
               <img src="https://cdn.pixabay.com/photo/2012/04/12/10/24/refrigerator-29345_1280.png" width="80px" alt=""/>
               <input 
               type="text" 
               value={this.state.term}
               onChange={e => this.setState({term: e.target.value})}
               className="userInput form-control form-control-lg"
               placeholder="Topic *Noun works best!"
               />
  
               <input type="submit" value="Get Magnets" className="btn btn-primary startBtn" />
               </div>
           </form>
        </div> 
        );
    }
}

export default StartBtn;
