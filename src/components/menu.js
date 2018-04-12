import React, { Component } from 'react';
// import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticate } from '../actions/index'
// import Resources from './resources'
// import requireAuth from './require_authentication'
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

class Menu extends Component {
  authButton(){
    if(this.props.authenticated){
      return <button onClick={()=>{this.props.authenticate(false)}}>Sign Out</button>
    }
    return <button onClick={()=>{this.props.authenticate(true)}}>Sign In</button>
  }


  render() {
    return (
      <nav>
        <div className="nav">
          <NavLink exact to="/" activeClassName="button">Home</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/login">Login</NavLink>
          {this.authButton()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated }
}
//
export default connect(mapStateToProps, {authenticate})(Menu)


          // <PrivateRoute path='/resources' component={requireAuth(Resources)} />

// export default Menu
