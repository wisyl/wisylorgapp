import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Label,
} from 'reactstrap';

export default class extends React.Component {
  render() {
    return (
      <Row className="justify-content-between mb-3">
        <Col>
          <Card>
            <CardBody className="d-flex flex-row align-items-center">
              <i className="fas fa-user-friends circle-background background-gray mb-3" />
              <div className="ml-3 d-flex flex-column">
                <h2>2,456</h2>
                TOTAL INVITED RECIPIENTS
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card>
            <CardBody className="d-flex flex-row align-items-center">
              <i className="fas fa-user-friends circle-background background-pink mb-3" />
              <div className="ml-3 d-flex flex-column">
                <h2>1,897</h2>
                ACTIVE RECIPIENTS
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
