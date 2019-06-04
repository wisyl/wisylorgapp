import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Label,
  Row,
  Col,
  Button
} from 'reactstrap';

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(name) {
    return (
      <Row className="justify-content-between mt-3">
        <Col>
          <strong>{name}</strong><br/>
          {'935'} People
        </Col>
        <Col xs="4">
          <Button color="link">Manage</Button>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Card className="mb-3">
        <CardBody>
          <CardTitle className="card-title-bordered">Groups</CardTitle>
          {this.renderItem('Northeast Division')}
          {this.renderItem('South Division')}
          {this.renderItem('Northeast Division')}
          {this.renderItem('Northeast Division')}
        </CardBody>
      </Card>

    )
  }
}