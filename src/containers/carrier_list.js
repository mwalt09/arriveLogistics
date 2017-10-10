import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { location } from '../actions/index';
import { Link } from 'react-router-dom';
import { selectCarrier } from '../actions/index';
import { bindActionCreators } from 'redux';

class CarrierList extends Component {

  renderHelper(data) {
  
    return (
      <tr key={data.Name}>
        <td className="data">
          {data.Name}
          <button 
            key={data.Id}
            onClick={() => selectCarrier(data)}
            className="details btn btn-primary">Details</button>
        </td>
      </tr>
    );
  }

  renderCarrier(cityData) {

    if (cityData.length === 0) {
      return;
    } 
    else if (cityData[0] === `No carriers found with provided city`) {
      // Needs more work to make this more functional looking
      return (
        <tbody>
          <tr>
            <td>{cityData[0]}</td>
          </tr>
        </tbody>
      );
    }
    else {
      const array = cityData[0];
      return (
        <tbody>
          {array.map(this.renderHelper)}
        </tbody>
      );
    }
  }

  render() {
    
    return (
      <div>
        <h3>{location}</h3>
        <div className="col-sm-6">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Carrier</th>
              </tr>
            </thead>
              {this.renderCarrier(this.props.city)}
          </table>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { city: state.city };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCarrier }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarrierList);