import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCarrierCity } from '../actions/index';
import CarrierList from "./carrier_list";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    
    this.props.fetchCarrierCity(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input 
            placeholder="Find carriers in your city"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Submit</button>
          </span>
        </form>
        <CarrierList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCarrierCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);