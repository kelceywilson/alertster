import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import _ from 'lodash'
import Modal from 'react-responsive-modal';

import NewAlert from './new_alert'
// import AlertDetail from '../containers/alert_detail'
import { deleteAlert, getAllAlerts, selectAlert } from '../actions/index'

class AlertList extends Component {
  componentDidMount(){
    this.props.getAllAlerts()
  }

  createAlertList() {
    return _.map(this.props.alerts, alert => {
      return (
        <div
          className="alert-div"
          key={alert._id}
          onClick={() => this.props.selectAlert(alert._id)}>
          <h4 className="alert-type">Type: {alert.alert_type}</h4>
          <h5 className="alert-title">Title: {alert.title}</h5>
          <button onClick={() => this.props.deleteAlert(alert._id)}>Delete Alert</button>
        </div>
      )
    })
  }

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (
      <div className='alert-list'>
        <button onClick={this.onOpenModal}>Submit New Alert</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <NewAlert />
        </Modal>
        {this.createAlertList()}
      </div>
    )
  }
}

// don't need to map state to props here because it's happening
// in the alert container
// function mapStateToProps(state){
//   // whatever is returned from here will show up as
//   //  this.props inside of this Component
//   //  this is the glue between react & redux
//   console.log(state.alerts);
//   return {
//     alerts: state.alerts
//   }
// }
//
// export default connect(mapStateToProps)(AlertList)

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getAllAlerts }, dispatch)
// }

export default connect(null, { deleteAlert, getAllAlerts, selectAlert })(AlertList)
