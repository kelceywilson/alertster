import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import FileUploader from './file_uploader'
import { addNewAlert, closeModal, getAllAlerts } from '../actions/index'
// field.input is an object that contains a bunch of
// event handlers and props
// the ... is saying all of the properties of the object
// to be communicated as props to the input tag
// it lets us avoid doing
// onChange={field.input.onChange}
// onFocus-{field.input.onFocus}  etc
//
// touched means user has focused then left an input
class NewAlert extends Component {
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

  onSubmit(values){
    // console.log(values);
    const photo_url = this.props.photo_url
    this.props.addNewAlert({...values, photo_url})
    this.props.closeModal()
  }

  onCancel(){
    this.props.closeModal()
  }
  // handleSubmit is given by reduxForm (like connect)
  // it runs the submitted values through the error
  // handler, and if ok, then to the onSubmit function
  fileUpload(event){
    console.log(event.target.files[0])
  }
  render() {
    const { handleSubmit } = this.props
    // const imgPreview = document.getElementById('img-preview')
    // const fileUpload = document.getElementById('file-upload')
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label='Alert Type'
            name='alert_type'
            component={this.renderField}
          />
          <Field
            label='Title'
            name='title'
            component={this.renderField}
          />
          <Field
            label='Photo'
            name='photo_url'
            component={FileUploader}
          />
          <button type="submit">
            SUBMIT AN ALERT
          </button>
          <button onClick={this.onCancel.bind(this)}>Cancel</button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {}

  if(!values.alert_type){
    errors.alert_type = "Enter alert type"
  }
  if(!values.title){
    errors.title = "Enter a title"
  }
  // if errors is empty then form is ok to SUBMIT
  // if errors has any properties than it isn't
  return errors
}

const afterSubmit = (result, dispatch) => dispatch(reset('NewAlertForm'))


function mapStateToProps(state){
  return { photo_url: state.file.photo_url }
}

// reduxForm is a lot like connect
// helps form connect to reduxForm reducer
export default reduxForm({
  validate: validate,
  form: 'NewAlertForm',
  onSubmitSuccess: afterSubmit
})(
  connect(mapStateToProps, { addNewAlert, closeModal, getAllAlerts } )(NewAlert)
)
