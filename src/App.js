import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import Footer from './Footer';

import {
	Container,Row,Col,
	Card, CardBody,CardTitle,
	Button, Form, FormGroup, Label, Input, FormText,
	Nav, NavItem, NavLink, TabContent, TabPane, 
	Badge
 } from 'reactstrap';

import classnames from 'classnames'; // for tabs

library.add(fab, faUser);
 
class App extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
  <div>
    <Header />
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
									<NavLink className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} active>Email</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>SMS</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>Instagram</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}>Facebook</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}>Twitter</NavLink>
								</NavItem>
							</Nav>
							<TabContent activeTab={this.state.activeTab}>
								<TabPane tabId="1">
									<Row>
										<Col>
										<Form className="mt-5">
											<Container>
												<Row>
													<Col>
														<FormGroup>
															<Label for="exampleEmail">Subject</Label>
															<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
														</FormGroup>
														<FormGroup>
															<Label for="exampleText">Message</Label>
															<Input type="textarea" name="text" id="exampleText" rows="7" />
														</FormGroup>
														<FormGroup>
															<Label for="exampleEmail">Link (optional)</Label>
															<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
														</FormGroup>
														<FormGroup>
															<Label for="exampleFile">Image</Label>
															<Input type="file" name="file" id="exampleFile" />
															<FormText color="muted">
																Image requirements would go here.
															</FormText>
														</FormGroup>
														<Button color="primary">Save Changes</Button>
													</Col>
													<Col md={{ size: 'auto', offset: 1 }}>
														Preview would go here and it would be fabulous. 
													</Col>
												</Row>
											</Container>
										</Form>
										</Col>
									</Row>
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
													<Input type="checkbox" checked />{' '}
													All Recipients (164)
												</Label>
											</FormGroup>
											<FormGroup>
												<Label check>
													<Input type="checkbox" />{' '}
													Individual Recipients
												</Label>
												<div className="mt-2">
													<Badge color="secondary">Bobby Flay X</Badge>&nbsp;
													<Badge color="secondary">Bobby Flay X</Badge>&nbsp;
													<Badge color="secondary">Bobby Flay X</Badge>
												</div>
											</FormGroup>
											<FormGroup>
												<Label check>
													<Input type="checkbox" />{' '}
													Groups
												</Label>
												<div className="mt-2">
													<Input type="select" name="select" id="exampleSelect" className="mb-3">
														<option>Group 1</option>
														<option>Group 2</option>
													</Input>
													<Badge color="secondary">Group 1 X</Badge>&nbsp;
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
											<FormGroup>
												<Label check>
													<Input type="checkbox" checked />{' '}
													Send Now
												</Label>
											</FormGroup>
											<FormGroup>
												<Label check>
													<Input type="checkbox" />{' '}
													Schedule for Later
												</Label>
												<div className="mt-2">
													<Input type="select" name="select" id="exampleSelect" className="mb-3">
														<option>May 1</option>
														<option>May 2</option>
													</Input>
												</div>
											</FormGroup>
											<FormGroup>
												<p>*86 users have specific time preferences set, the remaining 55 users will get the message now.</p>
											</FormGroup>
											<Button color="primary">Send Message</Button>&nbsp;
											<Button color="secondary">Send Test</Button>
										</Col>
									</Row>
								</Container>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>

		</div>
    <Footer />
  </div>
    );
  }
}
export default App;