import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticate } from '../actions/index'

class Menu extends Component {
  authButton(){
    if(this.props.authenticated){
      return <span>
        <NavLink to="/signout" className="button">Sign Out</NavLink>
      </span>

    } else {
      return [
        <span key={1}>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </span>
      ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav">
          <NavLink exact to="/" activeClassName="button">Home</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          {this.authButton()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, {authenticate})(Menu)
