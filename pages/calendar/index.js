import Page from '../../components/page'
import Layout from '../../components/layout'
import Router from 'next/router'

export default class extends Page {
  componentDidMount() {
    if (!this.props.session.user) {
      console.warn("User is not logged in - redirecting to auth")
      Router.push('/auth')
    }
  }

  render() {
    return (
      <Layout>
        <div className="site-container">
          <h3>Calendar Screen</h3>
        </div>
      </Layout>
    );
  }
}