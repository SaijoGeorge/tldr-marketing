import React from 'react'
import styled from 'react-emotion'

import SearchIcon from '../components/SearchIcon'
import { CategoryLink } from '../styles/typography'

import categories from '../categories'
import { colors } from '../styles/theme'
import { min, max, rem } from '../styles/tools'

const CategoriesBar = styled.div({
  position: 'sticky',
  top: 0,
  zIndex: 3,
  [max(940 - 1)]: {
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
  [min(940)]: {
    '> li': { marginRight: 0 },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: rem(15),
    paddingBottom: rem(15),
    margin: `0 ${rem(-14)}`,
    backgroundColor: colors.bg.blue.light,
    boxShadow: `0 0 40px 30px ${colors.bg.blue.light}`,
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
      <li css={{ [max(940 - 1)]: { order: -1 } }}>
        <CategoryLink
          to="/search"
          css={{ [min(940)]: { color: colors.text.blue.light } }}
          hoverColor={colors.text.blue.light}
        >
          <SearchIcon style={{ marginRight: 5 }} />
          Search
        </CategoryLink>
      </li>
    </CategoriesList>
  </CategoriesBar>
)

export default Categories
