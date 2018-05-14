import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import _ from 'lodash'
import Modal from 'react-responsive-modal';

import NewAlert from './new_alert'
// import AlertDetail from '../containers/alert_detail'
import { closeModal, deleteAlert, getAllAlerts, openModal, selectAlert } from '../actions/index'

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
          <img className="alert-thumb" src={alert.photo_url} alt={alert.title} />
          <button onClick={() => this.props.deleteAlert(alert._id)}>Delete Alert</button>
        </div>
      )
    })
  }

  onOpenModal = () => {
    this.props.openModal();
  };

  onCloseModal = () => {
    this.props.closeModal();
  };

  render() {
    const { open } = this.props;
    return (
      <div className='alert-list'>
        <button onClick={this.onOpenModal} className='button'>Submit New Alert</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <NewAlert />
        </Modal>
        {this.createAlertList()}
      </div>
    )
  }
}

function mapStateToProps(state){
  // whatever is returned from here will show up as
  //  this.props inside of this Component
  //  this is the glue between react & redux
  return {
    open: state.open
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getAllAlerts }, dispatch)
// }

export default connect(mapStateToProps, { closeModal, deleteAlert, getAllAlerts, openModal, selectAlert })(AlertList)
