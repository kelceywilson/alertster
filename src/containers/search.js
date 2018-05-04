import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchAlerts } from '../actions/index'

class Search extends Component {
  constructor(props){
    super(props)

    this.state = { terms: '' }
    this.onInputChange=this.onInputChange.bind(this)
    this.onFormSubmit=this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    // console.log(event.target.value);
    this.setState({ terms: event.target.value })
  }

  onFormSubmit(event){
    event.preventDefault()
    this.props.searchAlerts(this.state.terms)
    this.setState({terms: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="search"
            value={this.state.terms}
            onChange={this.onInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchAlerts }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
