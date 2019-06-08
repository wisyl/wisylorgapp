import {
    Row, Col,
  } from 'reactstrap' // bootstrap
  import Page from '../../components/page'
  import Layout from '../../components/layout'
  import SignIn from '../../components/SignIn'

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
      if (this.props.session.user) {
        return (
          <Layout {...this.props} navmenu={false}>
            <p className="lead text-center mt-5 mb-5">
              <Link href="/profile"><a>Manage your profile</a></Link>
            </p>
          </Layout>
        )
      } else {
        return (
          <Layout hideHeader={true} hideFooter={true} {...this.props} navmenu={false} signinBtn={false}>
            <h1 className="text-center display-4 mt-5">Sign up / Sign in</h1>
            <Row className="mb-5">
              <Col lg="8" className="mr-auto ml-auto" style={{marginBottom: 20}}>
                <SignIn session={this.props.session} providers={this.props.providers}/>
              </Col>
            </Row>
          </Layout>
        )
      }
    }
  }