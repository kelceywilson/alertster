import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signoutUser } from '../actions/index'

class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser()
  }

  render() {
    return <div>Later dude.</div>
  }
}



export default connect(null, { signoutUser } )(Signout)
