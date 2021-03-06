import React from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ContentContainer from '../components/ContentContainer'
import { ContentLayout } from '../styles/layouts'
import { Paragraph, NavbarLink } from '../styles/typography'

import { media } from '../styles/theme'
import { em } from '../styles/tools'

const NotFoundPage = () => (
  <Layout>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <NavbarLink to="/">
        <svg
          viewBox="0 0 24 24"
          css={{
            width: em(26),
            height: em(26),
            marginRight: em(5),
            fill: 'currentColor',
          }}
        >
          <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
        </svg>
        Go back
      </NavbarLink>
    </Navbar>
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <ContentLayout>
        <ContentContainer
          style={{ gridArea: 'ContentLayoutContent' }}
          css={{ [media.max._sm]: { marginTop: '10vh' } }}
        >
          <Paragraph size="lg">NOT FOUND</Paragraph>
          <Paragraph>
            You just hit a route that doesn&#39;t exist... the sadness.
          </Paragraph>
        </ContentContainer>
      </ContentLayout>
    </main>
  </Layout>
)

export default NotFoundPage
