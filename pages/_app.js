import React from 'react'
import App, { Container } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import './_app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'; //fontawesome icons
import { fab } from '@fortawesome/free-brands-svg-icons'; //fontawesome icons
import {
  faBell,
  faUser,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons'; // add fontawesome icons here and below in libary.add

library.add(fab, faUser, faBell, faUserFriends); //add fontawesome icons here

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}