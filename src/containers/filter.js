import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterAlerts } from '../actions/index'

class Filter extends Component {
  constructor(props){
    super(props)

    this.state = { terms: '' }
    this.onInputChange=this.onInputChange.bind(this)
  }

  onInputChange(event){
    this.setState({ terms: event.target.value })
    this.props.filterAlerts(event.target.value)
  }

  createAlertTypeList() {
    return (
      <div className='filter'>
        <select onChange={this.onInputChange}>
          <option value='hello'>hello</option>
          <option value='there'>SALE</option>
        </select>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.createAlertTypeList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterAlerts }, dispatch)
}

export default connect(null, mapDispatchToProps)(Filter)
