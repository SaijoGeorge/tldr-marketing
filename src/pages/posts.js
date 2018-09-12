import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Author from '../components/Author'
import Day from '../components/Day'
import ContentContainer from '../components/ContentContainer'
import GoBackLink from '../components/GoBackLink'
import { ContentLayout } from '../styles/layouts'
import { Paragraph } from '../styles/typography'

import { media } from '../styles/theme'
import posts from '../posts'

const PostPage = ({ postSlug }) => {
  let post = posts.find(({ slug }) => postSlug === slug)

  if (post) {
    post = { ...post, isDefaultOpen: true }
  }

  return (
    <Fragment>
      <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
        <GoBackLink />
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
