import React from 'react'
import Media from 'react-media'

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
      <Media query={media.query._sm}>
        {isDesktop =>
          isDesktop && (
            <ContentLayout>
              <NewsletterForm style={{ gridArea: 'ContentLayoutContent' }} />
            </ContentLayout>
          )
        }
      </Media>
      <Day date={{ day: 'monday', date: '09/03' }} posts={posts} />
      <StyledLoadingBar>Loading...</StyledLoadingBar>
    </main>
  </Layout>
)

export default IndexPage
