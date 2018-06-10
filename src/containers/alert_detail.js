import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal, deleteAlert } from '../actions/index'
import _ from 'lodash'

// TODO make a function that provides all key-value pairs
// in p tags
// TODO make a function that turns those p tags to inputs
// {/* <img className="alert-thumb" src={alert.photo_url} alt={alert.title} />
// <h3>{alert.alert_type}</h3>
// <h3>{alert.title}</h3> */}

class AlertDetail extends Component {

  // for (let i in this.props.alerts.alert){
  //   return (
  //     <p>{i}</p>
  //   )
  // }
  keyValuePairs(edit){
    const pairs = Object.entries(this.props.alerts.alert)
    console.log(pairs);
    // const { alerts: {alert} } = this.props
    if(!edit){
      let keyCounter = -1
      return _.map(pairs, pair => {
        keyCounter++
        return (
          <p key={keyCounter}>{pair[0]}: {pair[1]}</p>
        )
      })
    } else {
      let keyCounter = -1
      return _.map(pairs, pair => {
        keyCounter++
        return (
          <p key={keyCounter}>{pair[0]}: {pair[1]}</p>
        )
      })
    }
  }

  alertDetail() {
    if (this.props.alerts.alert) {
      const details = this.keyValuePairs()
      console.log(details);
      return (
        <div className='alert-detail'>
          {details}
          <button className="alert-delete" onClick={() => this.props.deleteAlert(alert._id)}>Delete Alert</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.alertDetail()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    alerts: state.alerts
  }
}

export default connect(mapStateToProps, { closeModal, deleteAlert })(AlertDetail)
