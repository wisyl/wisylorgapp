import React from 'react'
import { Row, Col, Form, Input, Label, Button } from 'reactstrap'
import Cookies from 'universal-cookie'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'

const SpacedButton = styled(Button)`
  margin: 5px;
`

export default class extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      session: this.props.session,
      providers: this.props.providers,
      submitting: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }
  
  handleEmailChange(event) {
    this.setState({
      email: event.target.value.trim()
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value.trim()
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    
    if (!this.state.email) return

    this.setState({
      submitting: true
    })
    
    // Save current URL so user is redirected back here after signing in
    const cookies = new Cookies()
    cookies.set('redirect_url', window.location.pathname, { path: '/profile' })

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

    fetch('/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'redirect_url': `${window.location.pathname}/profile`,
        'cookies': cookies.getAll(),
      },
      body: encodedForm,
      credentials: 'same-origin'
    })
    .then(response => {
      if (response.ok) {
        Router.push(`/auth/callback`)
      } else {
        Router.push(`/auth/error?action=signin&type=password&email=${this.state.email}&redirect_url=profile`)
      }
    })
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
                  <Label htmlFor="email">Email address</Label><br/>
                  <Input name="email" disabled={this.state.submitting} type="text" placeholder="j.smith@example.com" id="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}/>
                </p>
                <p>
                  <Label htmlFor="password">Passwprd</Label><br/>
                  <Input name="password" disabled={this.state.submitting} type="password" placeholder="*****" id="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange}/>
                </p>
                <p className="text-right">
                  <SpacedButton id="submitButton" disabled={this.state.submitting} outline color="dark" type="submit">
                    {this.state.submitting === true && <span className="icon icon-spin ion-md-refresh mr-2"/>}
                    Sign in with email
                  </SpacedButton>
                  <Link href="/auth/create-user">
                    <SpacedButton id="signupButton" disabled={this.state.submitting} color="primary" type="submit">
                      {this.state.submitting === true && <span className="icon icon-spin ion-md-refresh mr-2"/>}
                      Sign up
                    </SpacedButton>
                  </Link>
                </p>
              </Form>
            </Col>
          </Row>
        </React.Fragment>
      )
    }
  }
}
