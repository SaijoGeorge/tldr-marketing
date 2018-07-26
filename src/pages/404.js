import React from 'react'

const NotFoundPage = () => (
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
)

export default NotFoundPage
