import Page from '../../components/page'
import Layout from '../../components/layout'
import Router from 'next/router'

import { completedEnrollment } from '../../lib/ComponentMethods'

export default class extends Page {
  componentDidMount() {
    completedEnrollment(this.props, Router)
  }

  render() {
    if (!this.props.session.user) {
      return null
    }

    return (
      <Layout {...this.props}>
        <div className="site-container">
          <h3>Profile Screen</h3>
          <h5>Howdy, {this.props.session.user.name}</h5>
        </div>
      </Layout>
    );
  }
}