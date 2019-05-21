import { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class extends Component {
  render() {
    const { hideHeader, hideFooter } = this.props
    return (
      <div class="min-vh-100 d-flex flex-column">
        {!hideHeader && <Header />}
        <div class="flex-fill">
          {this.props.children}
        </div>
        {!hideFooter && <Footer />}
      </div>
    )
  }
}