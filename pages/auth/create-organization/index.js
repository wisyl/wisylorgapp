import {
  Row, Col,
} from 'reactstrap' // bootstrap
import Page from '../../../components/page'
import Layout from '../../../components/layout'
import NewOrganization from '../../../components/NewOrganization'

import Router from 'next/router'

export default class extends Page {
  componentDidMount() {
    if (!this.props.session.user) {
      console.warn("User is not logged in - redirecting to auth")
      Router.push('/auth')
    }
  }

  render() {
    if (!this.props.session.user) {
      return null
    }

    return (
      <Layout hideHeader={true} hideFooter={true} {...this.props}>
        <h1 className="text-center display-4 mt-5">Nice to meet you, {this.props.session.user.name}</h1>
        <h3 className="text-center display-5 mt-5">Let's fill in some information about your organization.</h3>
        <Row className="mb-5">
          <Col lg="8" className="mr-auto ml-auto" style={{marginBottom: 20}}>
            <NewOrganization session={this.props.session} providers={this.props.providers}/>
          </Col>
        </Row>
      </Layout>
    )
  }
}