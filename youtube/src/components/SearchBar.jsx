import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = e =>{
        this.setState({term: e.target.value});
    };

    onFormSubmit = e =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="container">
                <form className="form-group" onSubmit={this.onFormSubmit}>
                <div>
                 <label >Video Search</label>
                 <input type="text"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}
                 />
                 </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;