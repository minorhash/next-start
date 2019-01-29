import React from 'react'

import Layout from '../components/layout'

const posts = [
  { slug: 'Indoor_Cameras', title: 'Indoor Cameras' },
  { slug: 'Outdoor_Cameras', title: 'Outdoor Cameras' }
]

export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    const post = posts.find(post => post.slug === query.slug)

    if (!post && res) {
      res.statusCode = 404
    }

    return { post }
  }

  render () {
    const { post } = this.props

    if (!post) return <Layout><h1>Products</h1></Layout>

    return <Layout><h1>{post.title}</h1></Layout>
  }
}
