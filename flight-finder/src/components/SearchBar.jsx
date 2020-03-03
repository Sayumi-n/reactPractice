import React from 'react'

class SearchBar extends React.Component {


state = { date: new Date().toISOString().slice(0,10)};

onFormSubmit= (e) =>{
    e.preventDefault();

    this.props.onSubmit(this.state.date);
};


    render() {
        return (
        <div className=''>
           <form onSubmit={this.onFormSubmit} className=''>
               <div className='field' >
               <label>date</label>
               <input 
               type="date" 
               value={this.state.date}
               onChange={e => this.setState({date: e.target.value})}
               />
               <input type="submit" value="Find Flight" />
               </div>
           </form>
        </div> 
        );
    }
}

export default SearchBar;