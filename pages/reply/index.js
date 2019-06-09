import Page from '../../components/page'
import Layout from '../../components/layout'
import Router from 'next/router'

import { completedEnrollment } from '../../lib/ComponentMethods'

export default class extends Page {
  componentDidMount() {
    completedEnrollment(this.props, Router)
  }

  render() {
    return (
      <Layout {...this.props}>
        <div className="site-container">
          <h3>Reply Screen</h3>
        </div>
      </Layout>
    );
  }
}