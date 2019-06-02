import { Component } from 'react'

import {
  Container,
  Row,
  Col,
 } from 'reactstrap'

export default class extends Component {
  render() {
    return (
      <footer className="sticky-bottom">
        <Container>
          <Row>
            <Col>
              &copy; Wisyl, All rights reserved.
            </Col>
            <Col className="text-right">
              <a href="/">Terms of Use</a> &nbsp; <a href="/">Privacy Policy</a>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}