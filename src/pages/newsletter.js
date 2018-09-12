import React, { Fragment } from 'react'
import Media from 'react-media'

import Layout from '../components/Layout'
import Author from '../components/Author'
import Navbar from '../components/Navbar'
import NewsletterForm from '../components/NewsletterForm'
import { ContentLayout } from '../styles/layouts'
import { NavbarText, NavbarLink } from '../styles/typography'

import { media } from '../styles/theme'
import { em } from '../styles/tools'

const NavbarH1 = NavbarText.withComponent('h1')

const NewsletterPage = () => (
  <Layout>
    <Media query={media.query._sm}>
      {isDesktop =>
        isDesktop && (
          <Fragment>
            <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
              <NavbarH1 size="md">Newsletter</NavbarH1>
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
                <NewsletterForm style={{ gridArea: 'ContentLayoutContent' }} />
              </ContentLayout>
            </main>
          </Fragment>
        )
      }
    </Media>
  </Layout>
)

export default NewsletterPage
