import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchMessage } from '../actions'

class Profile extends Component {
  componentDidMount(){
    this.props.fetchMessage()
  }

  render(){
    console.log(this.props.message);

    return (
      <div>
        <h4>Profile</h4>
        <div>{this.props.message}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { message: state.auth.message }
}

export default connect(mapStateToProps, { fetchMessage })(Profile)
// we pass this in to a higher order component
// to give it some additional behavior
// so that it becomes a wrapped Resources
