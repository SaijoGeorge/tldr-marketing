import React, { Fragment } from 'react'
import { Router } from '@reach/router'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Author from '../components/Author'
import Day from '../components/Day'
import StyledLoadingBar from '../components/StyledLoadingBar'
import { CategoryLabel, NavbarText, NavbarLink } from '../styles/typography'

import { media } from '../styles/theme'
import { em, rem } from '../styles/tools'
import categories from '../categories'
import posts from '../posts'

const CategoryPage = ({ categorySlug }) => (
  <Fragment>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <h1 css={{ display: 'flex' }}>
        <CategoryLabel
          color={categories[categorySlug].color}
          css={{ [media._sm]: { fontSize: rem(16) } }}
        >
          {categories[categorySlug].label}
        </CategoryLabel>{' '}
        <NavbarText css={{ marginLeft: rem(10) }}>news roundup</NavbarText>
      </h1>
      <div css={{ marginLeft: 'auto' }}>
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
      </div>
    </Navbar>
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <Author />
      <Day
        date={{ day: 'tuesday', date: '09/04' }}
        posts={[...posts].reverse()}
      />
      <Day date={{ day: 'monday', date: '09/03' }} posts={posts} />
      <StyledLoadingBar>Loading...</StyledLoadingBar>
    </main>
  </Fragment>
)

const IndexPage = () => (
  <Layout>
    <Router primary={false} component={Fragment}>
      <CategoryPage path="/categories/:categorySlug" />
    </Router>
  </Layout>
)

export default IndexPage
