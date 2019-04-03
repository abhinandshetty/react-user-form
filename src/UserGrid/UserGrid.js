import React, { Component } from 'react';
import User from '../User/User'

import {connect} from 'react-redux';
import {fetchUsers} from '../actions/UserAction'


class UserGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUserList = () => {
    console.log(this)
        return this.props.users.map((user,i) => (
            <User user={user} key={i}/>
        ));
    };


  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="row">
          <div className="col">
            ID
          </div>
          <div className="col">
            Name
          </div>
          <div className="col">
            Email
          </div>
          <div className="col">
            Gender
          </div>
          <div className="col">
            Phone
          </div>
          <div className="col">
            Date Of Birth
          </div>
        </div>
      </div>
      {this.renderUserList()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
    users : state.users.userlist,
});
export default connect(mapStateToProps,{ fetchUsers })(UserGrid);

