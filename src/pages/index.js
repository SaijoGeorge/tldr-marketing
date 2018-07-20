import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import theme from '../styles/theme'
import WideText from '../components/WideText'
import WideLink from '../components/WideLink'

import avatar from '../assets/saijo-george.png'

const { rem } = theme.tools

const Categories = props => (
  <ul
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      // position: 'sticky',
      // top: 0,
      margin: `0 ${rem(-14)}`,
      color: theme.colors.text.blue.dark,
      'li > *': {
        display: 'block',
        padding: `${rem(7)} ${rem(14)}`,
        fontWeight: 800,
        fontSize: rem(14),
        borderRadius: 5,
      },
      'li > *:not(.not-menu-link)': {
        position: 'relative',
        zIndex: 1,
        transition: '.2s',
        ':hover': {
          color: '#fff',
          '::before': {
            opacity: 1,
            transform: 'none',
          },
        },
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
          background: 'var(--color)',
          transform: 'scale(.9)',
          opacity: 0,
        },
      },
    }}
    {...props}
  >
    <li>
      <Link css={{ '--color': '#E0697D' }} to="/category/seo">
        SEO
      </Link>
    </li>
    <li>
      <Link css={{ '--color': '#4E8ED9' }} to="/category/paid-media">
        Paid Media
      </Link>
    </li>
    <li>
      <Link css={{ '--color': '#4FB996' }} to="/category/social-media">
        Social Media
      </Link>
    </li>
    <li>
      <Link css={{ '--color': '#39C2C2' }} to="/category/general">
        General
      </Link>
    </li>
    <li>
      <Link css={{ '--color': '#F4A93A' }} to="/category/jobs">
        Jobs
      </Link>
    </li>
    <li>
      <Link css={{ '--color': '#C583DE' }} to="/category/tips-and-tricks">
        Tips & Tricks
      </Link>
    </li>
    <li>
      <Link css={{ '--color': '#DE83B4' }} to="/category/interview">
        Interview
      </Link>
    </li>
    <li>
      <button
        className="not-menu-link"
        css={{
          color: theme.colors.text.blue.light,
        }}
      >
        Search
      </button>
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
            paddingBottom: '66%',
          },
        }}
      />
    </article>
  </li>
)

const IndexPage = () => (
  <Fragment>
    <Categories style={{ gridArea: 'Menu' }} />
    <div
      style={{
        gridArea: 'Sidebar',
        display: 'flex',
        flexDirection: 'column',
        padding: `${rem(24)} ${theme.space.rem.lg} ${theme.space.rem.lg}`,
      }}
    >
      <div
        css={{
          position: 'sticky',
          top: 150,
          color: theme.colors.text.blue.dark,
        }}
      >
        <h3 css={{ fontWeight: 600, fontSize: rem(40), lineHeight: 1.2 }}>
          thursday
        </h3>
        <span css={{ fontWeight: 700, fontSize: rem(18) }}>05/24</span>
      </div>
      <div css={{ position: 'fixed', bottom: theme.space.rem.lg }}>
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
      <ul
        css={{
          marginBottom: theme.space.rem.xxl,
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
  </Fragment>
)

export default IndexPage
