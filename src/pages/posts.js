import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Author from '../components/Author'
import Day from '../components/Day'
import ContentContainer from '../components/ContentContainer'
import { ContentLayout } from '../styles/layouts'
import { NavbarLink, Paragraph } from '../styles/typography'

import { media } from '../styles/theme'
import { em } from '../styles/tools'
import posts from '../posts'

const PostPage = ({ postSlug }) => {
  let post = posts.find(({ slug }) => postSlug === slug)

  if (post) {
    post = { ...post, isDefaultOpen: true }
  }

  return (
    <Fragment>
      <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
        <NavbarLink
          to="/"
          css={{
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1,
          }}
        >
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
        <Author />
        {post ? (
          <Day date={{ day: 'tuesday', date: '09/04' }} posts={[post]} />
        ) : (
          <ContentLayout>
            <ContentContainer
              style={{ gridArea: 'ContentLayoutContent' }}
              css={{ [media.max._sm]: { marginTop: '10vh' } }}
            >
              <Paragraph size="lg">Post not found</Paragraph>
            </ContentContainer>
          </ContentLayout>
        )}
      </main>
    </Fragment>
  )
}

const IndexPage = () => (
  <Layout>
    <Router primary={false} component={Fragment}>
      <PostPage path="/posts/:postSlug" />
    </Router>
  </Layout>
)

export default IndexPage
