import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Label,
  Row,
  Progress,
} from 'reactstrap';

export default class extends React.Component {
  render() {
    return (
      <Card className="mb-3">
        <CardBody>
          <CardTitle className="card-title-bordered">User Channels</CardTitle>
          <Row className="justify-content-between ml-1 mr-1">
            <Label>Email</Label>
            <Label>53%</Label>
          </Row>
          <Progress value="53" color="primary"/>
          <Row className="justify-content-between ml-1 mr-1 mt-3">
            <Label>Slack</Label>
            <Label>46%</Label>
          </Row>
          <Progress value="46" color="success"/>
          <Row className="justify-content-between ml-1 mr-1 mt-3">
            <Label>Twitter</Label>
            <Label>83%</Label>
          </Row>
          <Progress value="83" color="warning"/>
          <Row className="justify-content-between ml-1 mr-1 mt-3">
            <Label>WhatsApp</Label>
            <Label>33%</Label>
          </Row>
          <Progress value="33" color="danger"/>
        </CardBody>
      </Card>

    )
  }
}