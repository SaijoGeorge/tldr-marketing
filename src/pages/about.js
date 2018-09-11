import React from 'react'

import Layout from '../components/Layout'
import Author from '../components/Author'
import Navbar from '../components/Navbar'
import ContentContainer from '../components/ContentContainer'
import { ContentLayout } from '../styles/layouts'
import { Paragraph, NavbarText, NavbarLink } from '../styles/typography'

import { media } from '../styles/theme'
import { em } from '../styles/tools'

const NavbarH1 = NavbarText.withComponent('h1')

const NotFoundPage = () => (
  <Layout>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <NavbarH1>About</NavbarH1>
      <div css={{ marginLeft: 'auto' }}>
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
      </div>
    </Navbar>
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <Author />
      <ContentLayout>
        <ContentContainer
          style={{ gridArea: 'ContentLayoutContent' }}
          css={{ [media.max._sm]: { marginTop: '10vh' } }}
        >
          <Paragraph size="lg">About</Paragraph>
        </ContentContainer>
      </ContentLayout>
    </main>
  </Layout>
)

export default NotFoundPage
