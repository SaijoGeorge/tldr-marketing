import React, { Fragment } from 'react'
import styled from 'react-emotion'
import theme from '../styles/theme'
import Link from 'gatsby-link'
import WideText from '../components/WideText'
import WideLink from '../components/WideLink'

import avatar from '../assets/saijo-george.png'

const { rem } = theme.tools

const CategoryLink = styled(Link)(
  {
    display: 'flex',
    alignItems: 'center',
    padding: `${rem(7)} ${rem(14)}`,
    position: 'relative',
    zIndex: 1,
    fontWeight: 800,
    fontSize: rem(14),
    borderRadius: 5,
    transition: '.2s',
    '::before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1,
      left: 0,
      top: 0,
      borderRadius: 'inherit',
      transition: 'inherit',
      transform: 'scale(.9)',
      opacity: 0,
    },
    ':hover': {
      color: '#fff',
      '::before': {
        opacity: 1,
        transform: 'none',
      },
    },
  },
  ({ hoverColor }) => ({ '::before': { background: hoverColor } })
)

const Categories = props => (
  <ul
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      margin: `0 ${rem(-14)}`,
      color: theme.colors.text.blue.dark,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      background: theme.colors.bg.blue.light,
      boxShadow: `0 0 40px 30px ${theme.colors.bg.blue.light}`,
      paddingTop: rem(15),
      marginBottom: rem(15),
    }}
    {...props}
  >
    <li>
      <CategoryLink hoverColor="#E0697D" to="/category/seo">
        SEO
      </CategoryLink>
    </li>
    <li>
      <CategoryLink hoverColor="#4E8ED9" to="/category/paid-media">
        Paid Media
      </CategoryLink>
    </li>
    <li>
      <CategoryLink hoverColor="#4FB996" to="/category/social-media">
        Social Media
      </CategoryLink>
    </li>
    <li>
      <CategoryLink hoverColor="#39C2C2" to="/category/general">
        General
      </CategoryLink>
    </li>
    <li>
      <CategoryLink hoverColor="#F4A93A" to="/category/jobs">
        Jobs
      </CategoryLink>
    </li>
    <li>
      <CategoryLink hoverColor="#C583DE" to="/category/tips-and-tricks">
        Tips & Tricks
      </CategoryLink>
    </li>
    <li>
      <CategoryLink hoverColor="#DE83B4" to="/category/interview">
        Interview
      </CategoryLink>
    </li>
    <li>
      <CategoryLink
        to="/search"
        css={{ color: theme.colors.text.blue.light }}
        hoverColor={theme.colors.text.blue.light}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          css={{ marginRight: 5 }}
        >
          <circle cx="4.57143" cy="4.57143" r="3.57143" />
          <path
            d="M0 0L4.57143 4.57143"
            transform="translate(7.42847 7.42871)"
          />
        </svg>
        Search
      </CategoryLink>
    </li>
  </ul>
)

const Item = ({ color, label }) => (
  <li
    css={{
      position: 'relative',
      padding: rem(20),
      background: '#fff',
    }}
  >
    <div
      css={{
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: `${rem(16)} ${rem(4)}`,
        fontWeight: 800,
        fontSize: rem(12),
        color: '#fff',
        writingMode: 'vertical-lr',
        whiteSpace: 'nowrap',
        background: color,
        borderRadius: '0 5px 5px 0',
      }}
    >
      {label}
    </div>
    <article css={{ display: 'flex', alignItems: 'center' }}>
      <div
        css={{
          flexBasis: '65%',
          padding: rem(12),
        }}
      >
        <a href="#0" target="_blank">
          <h1 css={{ fontWeight: 800, fontSize: rem(19), color: '#333' }}>
            A New Rounded UI in Google Mobile SERP
          </h1>
          <span css={{ fontSize: rem(14), color: '#777' }}>alakov.com</span>
        </a>
        <p
          css={{
            marginTop: rem(13),
            fontSize: rem(14),
            lineHeight: 1.7,
            color: '#777',
          }}
        >
          Google seems to have rolled a new mobile SERP UI, that includes a
          wider search bar, rounded corners for individual result cards.
        </p>
        <WideText css={{ marginTop: rem(16), padding: 0 }}>Read more</WideText>
      </div>
      <div
        css={{
          flexBasis: '35%',
          borderRadius: 5,
          background: '#CCE0EA',
          '::after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: 0,
            paddingBottom: '58%',
          },
        }}
      />
    </article>
  </li>
)

const IndexPage = () => (
  <Fragment>
    <Categories style={{ gridArea: 'Menu' }} />
    <div style={{ gridArea: 'Content' }}>
      <div
        css={{
          position: 'fixed',
          zIndex: 1,
          bottom: theme.space.rem.lg,
          background: 'rgba(239, 245, 248, 0.9)',
          boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
        }}
      >
        <img
          src={avatar}
          alt="Saijo George"
          css={{
            width: rem(42),
            height: rem(42),
            borderRadius: '50%',
            filter: 'grayscale(1)',
            transformOrigin: 'left bottom',
            transition: '.3s',
            '*:hover > &': {
              transform: 'scale(2)',
              filter: 'grayscale(0)',
            },
          }}
        />
        <h4
          css={{
            marginTop: rem(13),
            marginBottom: rem(13),
            fontWeight: 700,
            fontSize: rem(18),
            lineHeight: 1.2,
            color: theme.colors.text.blue.dark,
          }}
        >
          Created by<br />
          Saijo George
        </h4>
        <WideLink to="/about" css={{ padding: 0 }}>
          Read more
        </WideLink>
      </div>
    </div>
    <div style={{ gridArea: 'Content' }}>
      <div
        css={{
          display: 'grid',
          alignItems: 'start',
          gridTemplate: `
            "Sidebar Content"
            / 25% 1fr
          `,
          marginBottom: theme.space.rem.xxl,
        }}
      >
        <div
          style={{ gridArea: 'Sidebar' }}
          css={{
            position: 'sticky',
            top: rem(150),
            color: theme.colors.text.blue.dark,
          }}
        >
          <h3 css={{ fontWeight: 600, fontSize: rem(40), lineHeight: 1.2 }}>
            thursday
          </h3>
          <span css={{ fontWeight: 700, fontSize: rem(18) }}>05/24</span>
        </div>
        <div style={{ gridArea: 'Content' }}>
          <ul
            css={{
              boxShadow: '0 5px 25px #CFDEE5',
              borderRadius: 8,
              li: {
                '&:first-child': { borderRadius: '8px 8px 0 0' },
                '&:last-child': { borderRadius: '0 0 8px 8px' },
                '&:not(:last-child)': { borderBottom: '1px solid #D6E3E9' },
              },
            }}
          >
            <Item label="Paid Media" color="#4E8ED9" />
            <Item label="SEO" color="#E0697D" />
            <Item label="Tips & Tricks" color="#C583DE" />
            <Item label="Jobs" color="#F4A93A" />
          </ul>
        </div>
      </div>
      <div
        css={{
          display: 'grid',
          alignItems: 'start',
          gridTemplate: `
            "Sidebar Content"
            / 25% 1fr
          `,
          marginBottom: theme.space.rem.xxl,
        }}
      >
        <div
          style={{ gridArea: 'Sidebar' }}
          css={{
            position: 'sticky',
            top: rem(150),
            color: theme.colors.text.blue.dark,
          }}
        >
          <h3 css={{ fontWeight: 600, fontSize: rem(40), lineHeight: 1.2 }}>
            friday
          </h3>
          <span css={{ fontWeight: 700, fontSize: rem(18) }}>05/25</span>
        </div>
        <div style={{ gridArea: 'Content' }}>
          <ul
            css={{
              boxShadow: '0 5px 25px #CFDEE5',
              borderRadius: 8,
              li: {
                '&:first-child': { borderRadius: '8px 8px 0 0' },
                '&:last-child': { borderRadius: '0 0 8px 8px' },
                '&:not(:last-child)': { borderBottom: '1px solid #D6E3E9' },
              },
            }}
          >
            <Item label="Paid Media" color="#4E8ED9" />
            <Item label="SEO" color="#E0697D" />
            <Item label="Tips & Tricks" color="#C583DE" />
            <Item label="Jobs" color="#F4A93A" />
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
)

export default IndexPage
