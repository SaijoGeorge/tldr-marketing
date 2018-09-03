import React from 'react'

import Layout from '../components/Layout'
import Categories from '../components/Categories'
import Author from '../components/Author'
import Day from '../components/Day'
import LoadingBar from '../components/LoadingBar'

import posts from '../posts'

const IndexPage = () => (
  <Layout>
    <Categories style={{ gridArea: 'InnerLayoutMenu' }} />
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <Author />
      <Day date={{ day: 'tuesday', date: '09/04' }} posts={posts} />
      <Day date={{ day: 'monday', date: '09/03' }} posts={posts} />
      <LoadingBar>Loading...</LoadingBar>
    </main>
  </Layout>
)

export default IndexPage
