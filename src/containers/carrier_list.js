import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { location } from '../actions';
import { Link } from 'react-router-dom';
import { selectCarrier } from '../actions';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class CarrierList extends Component {

  renderCarrier() {

    const help = this.props.city.undefined;
    
    if (help === 'y') {
      return (
        <tr>
          <td>No carriers found within searched city.</td>
        </tr>
      );
    }

    return _.map(this.props.city, city => {
      return (
        <tr key={city.Name}>
          <td className='data'>
            {city.Name}
            <Link
              key={city.Id}
              to={`/carrierDetails/${city.Id}`}
              className='details btn btn-primary'>Details</Link>
          </td>
        </tr>
      );
    });
  }

  render() {

    return (
      <div className="container">
        <h3 className="cityName">{location}</h3>
        <div className="col-sm-12">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="tbHead">Carrier</th>
              </tr>
            </thead>
            <tbody>
              {this.renderCarrier(this.props.city)}
            </tbody>
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