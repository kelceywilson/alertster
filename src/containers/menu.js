import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticate } from '../actions/index'

class Menu extends Component {
  authButton(){
    if(this.props.authenticated){
      return (
        <div className="nav">
          <NavLink exact to="/">
            <img className='icon' src='./home.png' alt='home' />
          </NavLink>
          <NavLink to="/profile">
            <img className='icon' src='./user.png' alt='profile' />
          </NavLink>
          <NavLink className='smush-left' to="/signout">
            <img className='icon' src='./signout.png' alt='signout' />
          </NavLink>
        </div>
      )
    } else {
      return (
        <div className="nav">
          <NavLink exact to="/">
            <img className='icon' src='./home.png' alt='home' />
          </NavLink>
          <NavLink to="/signin"><img className='icon' src='./signin.png' alt='home' /></NavLink>
          <NavLink to="/signup"><img className='icon' src='./signup.png' alt='home' /></NavLink>
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

// pure is set to false to ensure Menu re-renders when a NavLink
// sets its class to active
export default connect(mapStateToProps, {authenticate}, null, {
  pure: false
})(Menu)
