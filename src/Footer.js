import React, {Component} from 'react';

import {
	Container,Row,Col,

 } from 'reactstrap';

export default class Footer extends Component {
  render(){
    return (
      <footer>
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