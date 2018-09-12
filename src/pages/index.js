import React from 'react'

import Layout from '../components/Layout'
import NewsletterForm from '../components/NewsletterForm'
import Categories from '../components/Categories'
import Author from '../components/Author'
import Day from '../components/Day'
import StyledLoadingBar from '../components/StyledLoadingBar'
import { ContentLayout } from '../styles/layouts'

import { media } from '../styles/theme'
import posts from '../posts'

const IndexPage = () => (
  <Layout>
    <Categories style={{ gridArea: 'InnerLayoutNavbar' }} />
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <Author />
      <Day date={{ day: 'tuesday', date: '09/04' }} posts={posts} />
      <ContentLayout css={{ [media.max._sm]: { display: 'none' } }}>
        <NewsletterForm
          name="desktop"
          style={{ gridArea: 'ContentLayoutContent' }}
        />
      </ContentLayout>
      <Day date={{ day: 'monday', date: '09/03' }} posts={posts} />
      <StyledLoadingBar>Loading...</StyledLoadingBar>
    </main>
  </Layout>
)

export default IndexPage
