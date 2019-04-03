import React, { Component } from 'react';
import {fetchUsers} from '../actions/UserAction';

class UserGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-boy">
        <div className="col-md-12">
          <div className="row mt-1">
          <div className="col">
            {this.props.user.id}
          </div>
          <div className="col">
            {this.props.user.name}
          </div>
          <div className="col">
            {this.props.user.email}
          </div>
          <div className="col">
            {this.props.user.gender}
          </div>
          <div className="col">
            {this.props.user.phone}
          </div>
          <div className="col">
            {this.props.user.dob}
          </div>
        </div>
      </div>
</div>
    );
  }
}

export default UserGrid;
