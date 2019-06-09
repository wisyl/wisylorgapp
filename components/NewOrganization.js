import React from 'react'
import { Row, Col, Form, Input, Label, Button } from 'reactstrap'
import Cookies from 'universal-cookie'
import Router from 'next/router'

import { lambdaCheck } from '../lib/Utils'

export default class extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      website: ``,
      phone: '',
      session: this.props.session,
      providers: this.props.providers,
      submitting: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.formValid = this.formValid.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    
    if (!this.state.name) return

    this.setState({
      submitting: true
    })
    
    // Save current URL so user is redirected back here after signing in
    const cookies = new Cookies()
    cookies.set('redirect_url', window.location.pathname, { path: '/' })

    const formData = {
      _csrf: this.props.session.csrfToken,
      name: lambdaCheck(this.state.name),
      website: lambdaCheck(this.state.website),
      phone: lambdaCheck(this.state.phone),
    }
      
    // Encoded form parser for sending data in the body
    const encodedForm = Object.keys(formData).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
    }).join('&')

    return fetch(`/users/${this.props.session.user.id}/organization`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedForm,
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        Router.push(`/`)
      } else {
        console.warn('Something went wrong', response)
        this.setState({
          submitting: false
        })
      }
    })
  }

  formValid() {
    if (!this.state.name ) {
      return false
    }

    return true
  }
  
  render() {
      return (
        <React.Fragment>
          <Row>
            <Col xs={12} md={{offset: 3, size: 6}}>
              <Form id="new-org" onSubmit={this.handleSubmit}>
                <Input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
                <p>
                  <Label htmlFor="name">Organization Name</Label><br/>
                  <Input name="name" disabled={this.state.submitting} type="text" placeholder="My Organization Name" id="name" className="form-control" value={this.state.name} onChange={this.handleInputChange}/>
                </p>
                <p>
                  <Label htmlFor="email">Website</Label><br/>
                  <Input name="website" disabled={this.state.submitting} type="text" placeholder="wisyl.com" id="email" className="form-control" value={this.state.website} onChange={this.handleInputChange}/>
                </p>
                <p>
                  <Label htmlFor="password">Phone Number</Label><br/>
                  <Input name="phone" disabled={this.state.submitting} type="phone" placeholder="111-222-3333" id="phone" className="form-control" value={this.state.phone} onChange={this.handleInputChange}/>
                </p>
                <p className="text-right">
                  <Button id="submitButton" disabled={this.state.submitting || !this.formValid()} color="primary" type="submit">
                    {this.state.submitting === true && <span className="icon icon-spin ion-md-refresh mr-2"/>}
                    Submit
                  </Button>
                </p>
              </Form>
            </Col>
          </Row>
        </React.Fragment>
      )
  }
}
