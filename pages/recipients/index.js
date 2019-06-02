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

export default class extends Page {

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
