import {
  Container,
  Row,
  Col,
} from 'reactstrap' // bootstrap

import Page from '../../components/page'
import Layout from '../../components/layout'
import {
  Filters,
  Statistics,
  RecipientsList,
  Channels,
  Groups
} from '../../components/recipients'

import Router from 'next/router'

export default class extends Page {
  componentDidMount() {
    if (!this.props.session.user) {
      console.warn("User is not logged in - redirecting to auth")
      Router.push('/auth')
    }
  }

  render() {
    return (
      <Layout>
        <div className="site-container">
          <Container>
            <Row>
              <Col><Filters /></Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Statistics />
                <RecipientsList />
              </Col>
              <Col xs="3.5">
                <Channels />
                <Groups />
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}
