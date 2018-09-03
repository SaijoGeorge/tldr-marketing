import React from 'react'

import { media, space, colors } from '../styles/theme'
import { min, rem } from '../styles/tools'

import ContentLayout from './ContentLayout'
import Post from './Post'

const Day = ({ date: { day, date }, posts }) => (
  <ContentLayout
    css={{
      paddingBottom: rem(50),
      [min(940)]: {
        paddingBottom: space.rem.xxl,
      },
    }}
  >
    <div
      style={{ gridArea: 'ContentLayoutSidebar' }}
      css={{
        position: 'sticky',
        top: rem(53),
        zIndex: 2,
        paddingTop: rem(12),
        paddingBottom: rem(12),
        paddingLeft: space.rem.md,
        [media.mobileLg]: { paddingLeft: rem(24) },
        color: '#fff',
        backgroundColor: colors.bg.blue.medium,
        [min(940)]: {
          top: rem(150),
          padding: 0,
          marginBottom: 0,
          color: colors.text.blue.dark,
          backgroundColor: 'initial',
        },
      }}
    >
      <h4
        css={{
          fontWeight: 800,
          fontSize: rem(14),
          lineHeight: 1.2,
          [min(940)]: {
            fontWeight: 600,
            fontSize: rem(24),
          },
          [min(1130)]: {
            fontSize: rem(40),
          },
        }}
      >
        {day + ' '}
        <span
          css={{
            [min(940)]: {
              display: 'block',
              fontWeight: 700,
              fontSize: rem(14),
            },
            [min(1130)]: { fontSize: rem(18) },
          }}
        >
          {date}
        </span>
      </h4>
    </div>
    <div style={{ gridArea: 'ContentLayoutContent' }}>
      <ul
        css={{
          backgroundColor: '#D6E3E9',
          '> li:first-child': { marginTop: '0 !important' },
          '> li:last-child': { marginBottom: '0 !important' },
          '> li:not(:last-child)': { marginBottom: 1 },
          [min(940)]: {
            boxShadow: '0 5px 25px #CFDEE5',
            borderRadius: 8,
            '> li': {
              '&:first-child': { borderRadius: '8px 8px 0 0' },
              '&:last-child': { borderRadius: '0 0 8px 8px' },
            },
          },
        }}
      >
        {posts.map((data, i) => (
          <Post key={i} data={data} />
        ))}
      </ul>
    </div>
  </ContentLayout>
)

export default Day
