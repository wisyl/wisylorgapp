import {
  Row, Col,
} from 'reactstrap' // bootstrap
import Page from '../../../components/page'
import Layout from '../../../components/layout'
import NewUser from '../../../components/NewUser'

import { NextAuth } from 'next-auth/client'
import Router from 'next/router'
import Link from 'next/link'

export default class extends Page {
  static async getInitialProps({req, res, query}) {
    let props = await super.getInitialProps({req})
    props.session = await NextAuth.init({force: true, req: req})
    props.providers = await NextAuth.providers({req})
    
    // If signed in already, redirect to account management page.
    if (props.session.user) {
      if (req) {
        res.redirect('/')
      } else {
        Router.push('/')
      }
    }

    // If passed a redirect parameter, save it as a cookie
    if (query.redirect) {
      const cookies = new Cookies((req && req.headers.cookie) ? req.headers.cookie : null)
      cookies.set('redirect_url', query.redirect, { path: '/' })
    }
    
    return props
  }

  render() {
    return (
      <Layout hideHeader={true} hideFooter={true} {...this.props}>
        <h1 className="text-center display-4 mt-5">Create a New Account</h1>
        <Row className="mb-5">
          <Col lg="8" className="mr-auto ml-auto" style={{marginBottom: 20}}>
            <NewUser session={this.props.session} providers={this.props.providers}/>
          </Col>
        </Row>
      </Layout>
    )
  }
}