import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { selectAlert } from '../actions/index'
class AlertDetail extends Component {
  render() {
    // console.log(this.props.details);
    return (
      <div>
        <div>
          <h4>Details</h4>
          <div>{this.props.details.user_name}</div>
          <div>{this.props.details.location}</div>
          <div>{this.props.details.post_date}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    alert: state.selectAlert
  }
}

export default connect(mapStateToProps)(AlertDetail)
