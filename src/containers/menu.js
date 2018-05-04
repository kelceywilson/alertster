import React, { Component } from 'react';
// import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticate } from '../actions/index'
// import Resources from './resources'
// import requireAuth from './require_authentication'

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

// const Menu = () => (
//   <header>
//     <div className="nav">
//       <NavLink exact to="/">Home</NavLink>
//       <NavLink to="/resources" activeClassName='button'>Resources</NavLink>
//       <NavLink to="/login">Login</NavLink>
//     </div>
//   </header>
// )

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     this.props.authenticated === true
//       ? <Component {...props} />
//       : <Redirect to={{
//        pathname: '/login',
//        state: { from: props.location }
//
//       }}/>
//   )}/>
// )
//
// we can get `from` from this.props.location.state
// <button onClick={()=>{this.props.authenticate(true)}}>Sign In</button>
// return <button onClick={()=>{this.props.authenticate(false)}}>Sign Out</button>



          // <PrivateRoute path='/resources' component={requireAuth(Resources)} />

// export default Menu
