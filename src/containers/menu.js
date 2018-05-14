import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticate } from '../actions/index'

class Menu extends Component {
  authButton(){
    if(this.props.authenticated){
      return (
        <div className="nav">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/signout">Sign Out</NavLink>
        </div>
      )
    } else {
      return (
        <div className="nav">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.authButton()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, {authenticate})(Menu)
