import Page from '../components/page'
import Layout from '../components/layout'
import Router from 'next/router'

import { completedEnrollment } from '../lib/ComponentMethods'

export default class extends Page {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    completedEnrollment(this.props, Router)
  }

  render() {
    return (
      <Layout {...this.props}>
      </Layout>
    );
  }
}