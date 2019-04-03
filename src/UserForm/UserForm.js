import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postUser} from '../actions/UserAction'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleFormChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name] : value});
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.postUser(this.state);
  }

  render() {
    return (
      <div className="form form-group mt-1">
      <form onSubmit={this.submitForm}>  
        <div className="col-md-12 mb-2">
        <div className="row"> 
        <div className="col-md-3"><input className="form-control" name="first_name" placeholder="First Name" onChange={this.handleFormChange}/></div>
        <div className="col-md-3"><input className="form-control" name="last_name" placeholder="Last Name" onChange={this.handleFormChange}/></div>
        <div className="col-md-3"><input className="form-control" name="email" placeholder="Email" onChange={this.handleFormChange}/></div>
        <div className="col-md-3">
        <select className="form-control" name="gender" placeholder="Gender" onChange={this.handleFormChange}>
        <option value="male">Male</option>
         <option value="female">Female</option>
        </select>
        </div>    
        </div>
        </div>
        <div className="row"> <div className="col-md-4"></div>
        <div className="col-md-2"><button type="submit" className="btn btn-success">Submit</button></div>
        <div className="col-md-2"><button type="reset" className="btn btn-danger">Reset</button></div>
        <div className="col-md-4"></div>
                </div>
      </form>
    
      </div>
    );
  }
}


const mapStateToProps = state => ({
    users : state.users.userlist,
});
export default connect(mapStateToProps,{ postUser })(UserForm);
