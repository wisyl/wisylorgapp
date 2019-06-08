import React from 'react'
import { Row, Col, Form, Input, Label, Button } from 'reactstrap'
import Cookies from 'universal-cookie'
import { NextAuth } from 'next-auth/client'
import styled from 'styled-components'
import Router from 'next/router'

const SpacedButton = styled(Button)`
  margin: 5px;
`

export default class extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ``,
      password: '',
      confirmPassword: '',
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
    
    if (!this.state.email) return

    this.setState({
      submitting: true
    })
    
    // Save current URL so user is redirected back here after signing in
    const cookies = new Cookies()
    cookies.set('redirect_url', window.location.pathname, { path: '/' })

    const formData = {
      _csrf: this.props.session.csrfToken,
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
    }
      
    // Encoded form parser for sending data in the body
    const encodedForm = Object.keys(formData).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
    }).join('&')

    return fetch('/auth/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encodedForm,
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        Router.push(`/auth/callback`)
      } else {
        Router.push(`/auth/error?action=signin&type=password&email=${this.state.email}`)
      }
    })
  }

  formValid() {
    if (!this.state.email || !this.state.password || !this.state.confirmPassword) {
      return false
    }

    if (this.state.password !== this.state.confirmPassword) {
      return false
    }

    return true
  }
  
  render() {
    if (this.props.session.user) {
      return(<div/>)
    } else {
      return (
        <React.Fragment>
          <Row>
            <Col xs={12} md={{offset: 3, size: 6}}>
              <Form id="signin" method="post" action="/auth/email/signin" onSubmit={this.handleSubmit}>
                <Input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
                <p>
                  <Label htmlFor="name">Full Name</Label><br/>
                  <Input name="name" disabled={this.state.submitting} type="text" placeholder="Dan Koziak" id="name" className="form-control" value={this.state.name} onChange={this.handleInputChange}/>
                </p>
                <p>
                  <Label htmlFor="email">Email address</Label><br/>
                  <Input name="email" disabled={this.state.submitting} type="email" placeholder="d.koziak@wisyl.com" id="email" className="form-control" value={this.state.email} onChange={this.handleInputChange}/>
                </p>
                <p>
                  <Label htmlFor="password">Passwprd</Label><br/>
                  <Input name="password" disabled={this.state.submitting} type="password" placeholder="**********" id="password" className="form-control" value={this.state.password} onChange={this.handleInputChange}/>
                </p>
                <p>
                  <Label htmlFor="confirmPassword">Confirm Password</Label><br/>
                  <Input name="confirmPassword" disabled={this.state.submitting} type="password" id="confirmPassword" placeholder="**********" className="form-control" value={this.state.confirmPassword} onChange={this.handleInputChange}/>
                </p>
                <p className="text-right">
                  <SpacedButton id="submitButton" disabled={this.state.submitting || !this.formValid()} color="primary" type="submit">
                    {this.state.submitting === true && <span className="icon icon-spin ion-md-refresh mr-2"/>}
                    Submit
                  </SpacedButton>
                </p>
              </Form>
            </Col>
          </Row>
        </React.Fragment>
      )
    }
  }
}
