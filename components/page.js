import React from 'react'
import Layout from './layout'
import { NextAuth } from 'next-auth/client'

import getConfig from 'next/config'
const config = getConfig()

export default class extends React.Component {  
  static async getInitialProps({req, res}) {
    const session = await NextAuth.init({req})

    let organization
    let user

    //  Serialize global props
    if (session.user) {
      const orgRaw = await fetch(`${config.publicRuntimeConfig.BASE_URL}/users/${session.user.id}/organization`)
      organization = await orgRaw.json()

      const userRaw = await fetch(`${config.publicRuntimeConfig.BASE_URL}/users/${session.user.id}`)
      user = await userRaw.json()
    }
    
    return {
      organization,
      user,
      session,// Add this.props.session to all pages
      lang: 'en' // Add a lang property to all pages for accessibility
    }
  }

  adminAccessOnly() {
    return (
      <Layout {...this.props} navmenu={false}>
        <div className="text-center pt-5 pb-5">
          <h1 className="display-4 mb-5">Access Denied</h1>
          <p className="lead">You must be signed in as an administrator to access this page.</p>
        </div>
      </Layout>
    )
  }

}