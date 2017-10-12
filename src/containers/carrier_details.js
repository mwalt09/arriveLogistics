import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCarrier } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class ShowDetails extends Component {
  componentDidMount() {
    const Id  = this.props.match.params;
    this.props.selectCarrier(Id);
  }

  renderHelper() {
    const cap = this.props.selected.Capabilities;
    

    if (!cap) {
      return;
    }
    
    return cap.join(', ');
  }

  render() {
    const { selected } = this.props;
    
    console.log('Selected:', selected);

    if (!selected) {
      return <div>Loading...</div>
    }

    return (
      <div className="container">
        <h3 className="carName">{selected.Name}</h3>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Capabilities:</th>
              <td>{this.renderHelper(this.props)}</td>
            </tr>
            <tr>
              <th>Price Per Load:</th> 
              <td>${selected.PricePerLoad}</td>
            </tr>
            <tr>
              <th>Representative:</th>
              <td>{selected.ContactName}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{selected.ContactPhone}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{selected.ContactEmail}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/" className="btn btn-primary back">Back To List</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { selected: state.city[ownProps.match.params.Id] };
}

export default connect(mapStateToProps, { selectCarrier })(ShowDetails);

