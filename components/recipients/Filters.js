import React from 'react';
import {
  Container,
  Button,
  Row,
  Col,
  Input
} from 'reactstrap';

export default class extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-between">
          <Col xs={{ size: 'auto' }}>
            <Row className="justify-content-start">
              <Col className="pl-0">
                {/* groups */}
                <Input type="select" name="select" id="group-selection">
                  <option>All</option>
                  <option>Group 1</option>
                  <option>Group 2</option>
                </Input>
              </Col>
              <Col>
                {/* channels */}
                <Input type="select" name="select" id="channel-selection">
                  <option>Channels</option>
                  <option>Channel 1</option>
                  <option>Channel 2</option>
                </Input>
              </Col>
            </Row>
          </Col>

          <Col xs={{ size: 'auto' }}>
            <Button color="primary">+ New User</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
