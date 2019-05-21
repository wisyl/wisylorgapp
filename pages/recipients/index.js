import { Component } from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap' // bootstrap

import Layout from '../../components/Layout'
import {
  Filters,
  Statistics,
  RecipientsList,
  Channels,
  Groups
} from '../../components/recipients'

export default class extends Component {

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
              <Col xs="4">
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
