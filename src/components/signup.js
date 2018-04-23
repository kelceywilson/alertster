import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

// <a href="https://localhost:443/auth/login/facebook">
import { signupUser } from '../actions/index'
// const redirectHome = () => this.props.history.push('/')

class Signup extends Component {
  renderField(field){
    const { meta: { touched, error } } = field
    const className = touched && error ? 'error' : ''
    return (
      <div>
        <label>{field.label}</label>
        <input
          className={className}
          type='text'
          {...field.input}
        />
        <div className='error'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  handleFormSubmit({ email, password, passwordConfirm }){
    console.log(email, password)
    this.props.signupUser({ email, password})

    // this.props.history.push('/resources')
      // .then(() => this.props.history.push('/'))
  }

  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className='error'>oops - {this.props.errorMessage}</div>
      )
    }
  }
// handleSubmit is given by reduxForm (like connect)
// it runs the submitted values through the error
// handler, and if ok, then to the onSubmit function
  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <h4>Sign Up</h4>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
            label='Email'
            name='email'
            component={this.renderField}
          />
          <Field
            label='Password'
            name='password'
            component={this.renderField}
          />
          <Field
            label='Confirm Password'
            name='passwordConfirm'
            component={this.renderField}
          />
          {this.renderAlert()}
          <button type="submit">Sign Up</button>
          <button>Cancel</button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {}

  if(!values.email){
    errors.email = "Enter email"
  }
  if(!values.password){
    errors.password = "Enter password"
  }
  if(!values.passwordConfirm){
    errors.passwordConfirm = "Confirm password"
  }
  if(values.passwordConfirm !== values.password){
    errors.passwordConfirm = "Passwords must match"
  }
  // if errors is empty then form is ok to SUBMIT
  // if errors has any properties than it isn't
  return errors
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  validate: validate,
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
})(
  connect(mapStateToProps, {signupUser})(Signup)
)
// export default reduxForm({
//   validate: validate,
//   form: 'NewAlertForm',
//   onSubmitSuccess: afterSubmit
// })(
//   connect(null, { addNewAlert, getAllAlerts } )(NewAlert)
// )
