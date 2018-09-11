import React from 'react'
import styled from 'react-emotion'

import SearchIcon from '../components/SearchIcon'
import { CategoryLink } from '../styles/typography'

import categories from '../categories'
import { colors, media } from '../styles/theme'
import { rem } from '../styles/tools'

const CategoriesBar = styled.div({
  position: 'sticky',
  top: 0,
  zIndex: 3,
  [media.max._sm]: {
    padding: rem(10),
    whiteSpace: 'nowrap',
    backgroundColor: colors.bg.blue.dark,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
})

const CategoriesList = styled.ul({
  display: 'inline-flex',
  alignContent: 'center',
  alignItems: 'center',
  color: colors.text.blue.dark,
  '> li': { marginRight: rem(10) },
  [media._sm]: {
    '> li:last-of-type': { marginRight: 0 },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: rem(15),
    paddingBottom: rem(15),
    backgroundColor: colors.bg.blue.light,
    boxShadow: `0 0 30px 15px ${colors.bg.blue.light}, 30px 0 30px 15px ${
      colors.bg.blue.light
    }`,
  },
  [media.laptopMd]: {
    '> li': { flex: 1 },
  },
})

const Categories = props => (
  <CategoriesBar {...props}>
    <CategoriesList>
      {Object.entries(categories).map(([slug, { color, label }]) => (
        <li key={slug}>
          <CategoryLink hoverColor={color} to={`/category/${slug}`}>
            {label}
          </CategoryLink>
        </li>
      ))}
      <li css={{ [media.max._sm]: { order: -1 } }}>
        <CategoryLink
          to="/search"
          // css={{ [media._sm]: { color: colors.text.blue.light } }}
          hoverColor={colors.text.blue.light}
        >
          <SearchIcon css={{ marginRight: rem(5) }} />
          Search
        </CategoryLink>
      </li>
    </CategoriesList>
  </CategoriesBar>
)

export default Categories
