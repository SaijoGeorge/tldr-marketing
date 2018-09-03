import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{ gridArea: 'Content' }}
      css={{
        display: 'grid',
        gridTemplate: `
        "Sidebar Content"
        / 25% 1fr
      `,
      }}
    >
      <div style={{ gridArea: 'Content' }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
