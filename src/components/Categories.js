import React from 'react'
import styled from 'react-emotion'

import Navbar from '../components/Navbar'
import SearchIcon from '../components/SearchIcon'
import { CategoryLink } from '../styles/typography'

import categories from '../categories'
import { colors, media } from '../styles/theme'
import { rem } from '../styles/tools'

const CategoriesList = styled.ul({
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: colors.text.blue.dark,
  '> li': { marginRight: rem(10) },
  '> li a': { display: 'flex' },
  [media._sm]: {
    '> li:last-of-type': { marginRight: 0 },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  [media.laptopMd]: {
    '> li': { flex: 1 },
  },
})

const Categories = props => (
  <Navbar {...props}>
    <CategoriesList>
      {Object.entries(categories).map(([slug, { color, label }]) => (
        <li key={slug}>
          <CategoryLink color={color} to={`/categories/${slug}`}>
            {label}
          </CategoryLink>
        </li>
      ))}
      <li css={{ [media.max._sm]: { order: -1 } }}>
        <CategoryLink
          to="/search"
          // css={{ [media._sm]: { color: colors.text.blue.light } }}
          color={colors.text.blue.light}
        >
          <SearchIcon css={{ marginRight: rem(5) }} />
          Search
        </CategoryLink>
      </li>
    </CategoriesList>
  </Navbar>
)

export default Categories
