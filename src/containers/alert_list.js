import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import _ from 'lodash'
import Modal from 'react-responsive-modal';

import EditAlert from './edit_alert'
import NewAlert from './new_alert'
// import AlertDetail from '../containers/alert_detail'
import { closeModal, deleteAlert, editAlert, getAllAlerts, openModal, selectAlert } from '../actions/index'

class AlertList extends Component {
  componentDidMount(){
    this.props.getAllAlerts()
  }

  createAlertList() {
    return _.map(this.props.alerts.list, alert => {
      return (
        <div className="alert-div" key={alert._id}>
          <img className="alert-thumb" src={alert.photo_url} alt={alert.title} />
          <h4 className="alert-type">{alert.alert_type}</h4>
          <h5 className="alert-title">{alert.title}</h5>
          <button className="alert-delete" onClick={() => this.props.deleteAlert(alert._id)}>Delete Alert</button>
          <button className="alert-delete" onClick={() => this.props.openModal('editAlertModal')}>Edit Alert</button>
        </div>
      )
    })
  }

  getAllButton() {
    console.log(this.props.alerts);
    if(this.props.alerts.filtered){
      return (
        <div className='get-all-alerts-button-div'>
          <button onClick={this.props.getAllAlerts}>Get All Alerts</button>
        </div>
      )
    }
  }

// TODO add second modal for editAlert
// send which to this
  // onOpenModal = (event) => {
  //   console.log(event.target.value);
  //   this.props.openModal()
  // };
  //
  onCloseModal = () => {
    this.props.closeModal();
  };

  modalChooser(){
    const { open, whichModal } = this.props.open;
    console.log('whichModal', whichModal);
    if(whichModal === 'editAlertModal'){
      return (
        <Modal open={open} onClose={this.onCloseModal} center>
          <EditAlert />
        </Modal>
      )
    }
    return(
      <Modal open={open} onClose={this.onCloseModal} center>
        <NewAlert />
      </Modal>
    )
  }
  render() {
    return (
      <div>
        <div className='create-new-alert-button-div'>
          <button onClick={() => this.props.openModal('newAlertModal')} className='alert-new-button'>CREATE<img className='icon' src='./add.png' alt='add alert' /> ALERT</button>
        </div>
        {this.getAllButton()}
        <div className='alert-list'>
          {this.modalChooser()}
          {this.createAlertList()}
        </div>
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

export default connect(mapStateToProps, { closeModal, deleteAlert, editAlert, getAllAlerts, openModal, selectAlert })(AlertList)
