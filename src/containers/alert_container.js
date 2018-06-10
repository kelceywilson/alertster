import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Filter from './filter'
// import NewAlert from './new_alert'
import Search from './search'
import AlertList from './alert_list'
// import { selectAlert } from '../actions/index'
// import { bindActionCreators } from 'redux'
// ^^ensures action flows through all of the reducers

export default class AlertContainer extends Component {

  render() {
    return (
      <div>
        <div className='filters'>
          <Search />
          <Filter />
        </div>
        <AlertList />
      </div>
    )
  }
}

// function mapStateToProps(state){
//   // whenever state changes, this will execute
//   // whatever is returned from here will show up as
//   //  this.props inside of the Component(AlertContainer) connected
//   //  this is the glue between react & redux
//   return {
//     alerts: state.alerts
//   }
// }

// anything returned from this function will end up as props
// on the AlertContainer
// function mapDispatchToProps(dispatch){
//   // Whenever addNewAlert is called, the result should be passed
//   // to all of our reducers.
//   // The result flows through the dispatch function.
//   return bindActionCreators({
//     selectAlert: selectAlert
//   }, dispatch)
// }

// Promote AlertContainer from a component to a container --
// it tells AlertContainer about this new dispatch method,
//  addNewAlert. It makes it available as a prop.
// export default connect(mapStateToProps)(AlertContainer)
