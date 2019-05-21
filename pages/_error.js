import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    const nextRes = await fetch('https://api.github.com/repos/zeit/next.js')
    const errorCode = statusCode > 200 ? statusCode : false
    const json = await nextRes.json()

    return { errorCode, stars: json.stargazers_count }
  }

  render() {
    if (this.props.errorCode) {
      return <Error statusCode={this.props.errorCode} />
    }

    return <div>Next stars: {this.props.stars}</div>
  }
}