import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm/UserForm';
import UserGrid from './UserGrid/UserGrid';
import {Provider} from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App p-1">
       <UserForm/>
       <UserGrid/>
      </div>
      </Provider>
    );
  }
}

export default App;
