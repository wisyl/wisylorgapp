import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Styles from '../static/app.scss'

export default class extends Component {
  render() {
    const { hideHeader, hideFooter } = this.props
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title || 'Wisyl'}</title>
          <style dangerouslySetInnerHTML={{ __html: Styles }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <div className="min-vh-100 d-flex flex-column">
          {!hideHeader && <Header />}
          <div className="flex-fill">
            {this.props.children}
          </div>
          {!hideFooter && <Footer />}
        </div>
      </React.Fragment>
    )
  }
}