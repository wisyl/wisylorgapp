import {
  Container,
} from 'reactstrap' // bootstrap
import Page from '../../components/page'
import Layout from '../../components/layout'


export default class extends Page {
  render() {
    return (
      <Layout>
        <div className="site-container">
          <Container>
            {/*
              Add your code here
            */}
          </Container>
        </div>
      </Layout>
    );
  }
}