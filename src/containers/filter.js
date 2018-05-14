import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchAlerts } from '../actions/index'

class Filter extends Component {
  constructor(props){
    super(props)

    this.state = { terms: '' }
    this.onInputChange=this.onInputChange.bind(this)
  }

  onInputChange(event){
    this.setState({ terms: event.target.value })
    this.props.searchAlerts(event.target.value)
  }

  createAlertTypeList() {
    return (
      <div>
        <select onChange={this.onInputChange}>
          <option value='hello'>hello</option>
          <option value='there'>there</option>
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
  return bindActionCreators({ searchAlerts }, dispatch)
}

export default connect(null, mapDispatchToProps)(Filter)
