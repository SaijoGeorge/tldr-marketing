import React from 'react'
import styled from 'react-emotion'

import Post from './Post'
import { ContentLayout } from '../styles/layouts'
import { DayDate } from '../styles/typography'

import { media, space, colors } from '../styles/theme'
import { rem } from '../styles/tools'

const DayDateH4 = DayDate.withComponent('h4')

const StickyDate = styled.div({
  position: 'sticky',
  top: rem(53),
  zIndex: 2,
  paddingTop: rem(12),
  paddingBottom: rem(12),
  paddingLeft: space.md,
  [media.mobileLg]: { paddingLeft: rem(24) },
  color: 'white',
  backgroundColor: colors.bg.blue.medium,
  [media._sm]: {
    top: rem(150),
    padding: 0,
    marginBottom: 0,
    color: colors.text.blue.dark,
    backgroundColor: 'initial',
  },
})

const PostList = styled.div({
  backgroundColor: colors.bg.blue.normal,
  '> *:first-child': { marginTop: '0 !important' },
  '> *:last-child': { marginBottom: '0 !important' },
  '> *:not(:last-child)': { marginBottom: '1px' },
  [media._sm]: {
    boxShadow: `0 5px 25px ${colors.shadow.blue.light}`,
    borderRadius: '8px',
    '> *': {
      '&:first-child': { borderRadius: '8px 8px 0 0' },
      '&:last-child': { borderRadius: '0 0 8px 8px' },
    },
  },
})

const Day = ({ date: { day, date }, posts, ...rest }) => (
  <ContentLayout
    css={{
      paddingBottom: rem(50),
      [media._sm]: {
        paddingBottom: space.xxl,
      },
    }}
    {...rest}
  >
    <StickyDate style={{ gridArea: 'ContentLayoutSidebar' }}>
      <DayDateH4>
        {day + ' '}
        <DayDate.Detail>{date}</DayDate.Detail>
      </DayDateH4>
    </StickyDate>
    <div style={{ gridArea: 'ContentLayoutContent' }}>
      <PostList>
        {posts.map((data, i) => (
          <Post key={i} data={data} />
        ))}
      </PostList>
    </div>
  </ContentLayout>
)

export default Day
