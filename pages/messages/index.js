import 'react-dates/initialize' // datepicker
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap' // bootstrap
import { SingleDatePicker } from 'react-dates' // datepicker
import classnames from 'classnames' // for navtabs

import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  constructor(props) {
    super(props)

    this.toggleChannel = this.toggleChannel.bind(this)
    this.state = {
      activeChannel: '1',
    }
  }

  toggleChannel(channel) {
    if (this.state.activeChannel !== channel) {
      this.setState({
        activeChannel: channel,
      })
    }
  }

  render() {
    return (
      <Layout>
        <div className="site-container">
          <Container>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="card-title-bordered">Create Your Message</CardTitle>
                    <Form>
                      <Container>
                        <Row>
                          <Col>
                            <FormGroup>
                              <Label for="exampleText">Message</Label>
                              <Input type="textarea" name="text" id="exampleText" rows="7" />
                            </FormGroup>
                            <FormGroup>
                              <Label for="exampleEmail">Link (optional)</Label>
                              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                          </Col>
                          <Col md={{ size: 'auto', offset: 1 }}>
                            <FormGroup>
                              <Label for="exampleFile">Image</Label>
                              <Input type="file" name="file" id="exampleFile" />
                              <FormText color="muted">
                                Image requirements would go here.
                                <br /> Q: Should we use Cloudinary?
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Container>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-5">
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="card-title-bordered">Message Channels</CardTitle>
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeChannel === '1',
                          })}
                          onClick={() => {
                            this.toggleChannel('1')
                          }}
                        >
                          Email
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeChannel === '2',
                          })}
                          onClick={() => {
                            this.toggleChannel('2')
                          }}
                        >
                          SMS
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeChannel === '3',
                          })}
                          onClick={() => {
                            this.toggleChannel('3')
                          }}
                        >
                          Instagram
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeChannel === '4',
                          })}
                          onClick={() => {
                            this.toggleChannel('4')
                          }}
                        >
                          Facebook
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeChannel === '5',
                          })}
                          onClick={() => {
                            this.toggleChannel('5')
                          }}
                        >
                          Twitter
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeChannel}>
                      <TabPane tabId="1">
                        <Container>
                          <Row>
                            <Col>
                              <Form className="mt-5">
                                <Container>
                                  <Row>
                                    <Col>
                                      <FormGroup>
                                        <Label for="exampleEmail">Subject</Label>
                                        <Input
                                          type="email"
                                          name="email"
                                          id="exampleEmail"
                                          placeholder="with a placeholder"
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="exampleText">Message</Label>
                                        <Input type="textarea" name="text" id="exampleText" rows="7" />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="exampleEmail">Link (optional)</Label>
                                        <Input
                                          type="email"
                                          name="email"
                                          id="exampleEmail"
                                          placeholder="with a placeholder"
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="exampleFile">Image</Label>
                                        <Input type="file" name="file" id="exampleFile" />
                                        <FormText color="muted">Image requirements would go here.</FormText>
                                      </FormGroup>
                                      <Button color="primary">Save Changes</Button>
                                    </Col>
                                    <Col>
                                      <Label for="exampleEmail">Preview</Label>
                                      <br />
                                      Preview would go here and it would be fabulous.
                                    </Col>
                                  </Row>
                                </Container>
                              </Form>
                            </Col>
                          </Row>
                        </Container>
                      </TabPane>
                      <TabPane tabId="2">
                        <Container>
                          <Row>
                            <Col>this is SMS</Col>
                          </Row>
                        </Container>
                      </TabPane>
                      <TabPane tabId="3">
                        <Container>
                          <Row>
                            <Col>this is Instagram</Col>
                          </Row>
                        </Container>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-5">
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="card-title-bordered">Recipients</CardTitle>
                    <Form>
                      <Container>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <Label check>
                                <Input type="checkbox" defaultChecked /> All Recipients (164)
                              </Label>
                            </FormGroup>
                            <FormGroup>
                              <Label check>
                                <Input type="checkbox" /> Individual Recipients
                              </Label>
                              <div className="mt-2">
                                <Badge color="secondary">Bobby Flay X</Badge>
                                {' '}
                                <Badge color="secondary">Bobby Flay X</Badge>
                                {' '}
                                <Badge color="secondary">Bobby Flay X</Badge>
                              </div>
                            </FormGroup>
                            <FormGroup>
                              <Label check>
                                <Input type="checkbox" /> Groups
                              </Label>
                              <div className="mt-2">
                                <Input type="select" name="select" id="exampleSelect" className="mb-3">
                                  <option>Group 1</option>
                                  <option>Group 2</option>
                                </Input>
                                <Badge color="secondary">Group 1 X</Badge>
                                {' '}
                                <Badge color="secondary">Group 2 X</Badge>
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Container>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-5">
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="card-title-bordered">Schedule</CardTitle>
                    <Form>
                      <Container>
                        <Row>
                          <Col md="6">
                            <FormGroup tag="fieldset">
                              <Label>
                                <Input type="radio" name="radio1" defaultChecked /> Send Now (are you sure you want to
                                push the red button)
                              </Label>
                              <Label>
                                <Input type="radio" name="radio1" /> Schedule for Later
                              </Label>
                              <div className="mt-2">
                                <SingleDatePicker
                                  date={this.state.date} // momentPropTypes.momentObj or null
                                  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                  focused={this.state.focused} // PropTypes.bool
                                  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                  numberOfMonths={1}
                                  id="your_unique_id" // PropTypes.string.isRequired,
                                />
                              </div>
                              <p>
                                *86 users have specific time preferences set, the remaining 55 users will get the
                                message now.
                              </p>
                            </FormGroup>
                          </Col>
                        </Row>
                      </Container>
                    </Form>
                    <Button color="link">Send a Test Message</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-5">
            <Row>
              <Col>
                <Button color="primary" size="lg">
                  Send Message to 164 Recipients
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}
