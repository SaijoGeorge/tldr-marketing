import React from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Author from '../components/Author'
import Day from '../components/Day'
import SearchIcon from '../components/SearchIcon'
import StyledLoadingBar from '../components/StyledLoadingBar'
import { NavbarLink, NavbarText } from '../styles/typography'

import { media } from '../styles/theme'
import { em, rem } from '../styles/tools'
import posts from '../posts'

const SearchPage = () => (
  <Layout>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <NavbarText css={{ height: '100%' }}>
        <SearchIcon
          css={{ width: em(16), height: em(16), marginRight: rem(7) }}
        />
        <input
          placeholder="Type here to search..."
          css={{
            height: '100%',
            font: 'inherit',
            color: 'inherit',
            background: 'none',
            border: 'none',
            outline: 'none',
            '::placeholder': { color: 'inherit' },
            [media.max._sm]: {
              '::placeholder': { opacity: 0.6 },
            },
          }}
        />
      </NavbarText>
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
  </Layout>
)

export default SearchPage
