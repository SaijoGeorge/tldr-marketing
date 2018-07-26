import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'
import '../styles/global'

import WideText from '../components/WideText'
import WideLink from '../components/WideLink'
import Icon from '../components/Icon'

const BarWrapper = styled.div(({ theme: { colors, space } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  position: 'sticky',
  top: 0,
  color: colors.text.blue.dark,
  padding: `${space.rem.md} ${space.rem.lg}`,
}))

const { rem } = theme.tools

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content="Sample" />
        <meta name="keywords" content="sample, something" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito+Sans|Nunito:400,700,800,900"
          rel="stylesheet"
        />
      </Helmet>

      <div
        css={{
          display: 'grid',
          height: '100vh',
          overflow: 'auto',
          gridTemplate: `
            "LeftBar . Content . RightBar"
            / ${rem(80)} 2.5% 1fr 3.5% ${rem(80)}
          `,
        }}
      >
        <BarWrapper style={{ gridArea: 'LeftBar' }}>
          <WideLink verticalUp to="/about">
            about
          </WideLink>
          <WideLink verticalUp to="/sponsored">
            sponsored
          </WideLink>
          <WideText verticalUp css={{ marginTop: 'auto' }}>
            share
          </WideText>
          <ul
            css={{
              margin: `${rem(theme.space.md - theme.space.xs)} 0`,
              'a, svg': {
                display: 'block',
              },
              a: {
                padding: `${theme.space.rem.xs} 0`,
                color: theme.colors.text.blue.light,
                borderRadius: '50%',
                transform: 'rotate(-90deg)',
                transition: '.2s',
                ':hover': {
                  color: theme.colors.text.blue.dark,
                  transform: 'rotate(0deg)',
                },
              },
            }}
          >
            <li>
              <a href="http://linkedin.com/in/saijogeorge" target="_blank">
                <Icon icon="linkedIn" />
              </a>
            </li>
            <li>
              <a href="http://facebook.com/saijogeorge" target="_blank">
                <Icon icon="facebook" />
              </a>
            </li>
            <li>
              <a href="http://twitter.com/saijogeorge" target="_blank">
                <Icon icon="twitter" />
              </a>
            </li>
            <li>
              <a href="mailto:contact@tldrmarketing.com">
                <Icon icon="mail" />
              </a>
            </li>
          </ul>
        </BarWrapper>

        <div
          style={{ gridArea: 'Content' }}
          css={{
            display: 'grid',
            gridTemplate: `
              ". ." ${theme.space.rem.lg}
              "Logo Menu" auto
              ". ." ${theme.space.rem.lg}
              "Content Content" 1fr
              / 25% 1fr
            `,
          }}
        >
          <h1
            style={{ gridArea: 'Logo' }}
            css={{
              position: 'sticky',
              zIndex: 1,
              top: theme.space.rem.lg,
              color: theme.colors.text.blue.dark,
            }}
          >
            <Link
              to="/"
              css={{
                display: 'block',
                width: '80%',
                background: 'rgba(239, 245, 248, 0.9)',
                boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
              }}
            >
              <svg viewBox="0 0 116 50" fill="currentColor" width={120}>
                <title>TL;DR Marketing</title>
                <path d="M7.6 16.3v.5c0 .9.4 1.3 1.3 1.3.5 0 1-.2 1.6-.5l.7 3.7a8 8 0 0 1-4 1c-1.6 0-2.8-.4-3.8-1.2-.9-.8-1.4-2-1.4-3.3 0-.6 0-1 .2-1.5l1-5H1l.9-4H4l.8-4h5.4l-.8 4h3.5l-.8 4H8.6l-1 5zM17.3 1h5.4l-4.2 21H13l4.2-21zM26.5 12.8c-.9 0-1.6-.3-2.2-.9-.5-.5-.8-1.2-.8-2 0-1.1.3-2 1-2.5.6-.7 1.5-1 2.4-1 1 0 1.7.3 2.2.8.6.5.9 1.3.9 2.1 0 1-.4 1.9-1 2.5-.7.6-1.5 1-2.5 1zm-1.5 3c1 0 1.7.4 2.2.9.6.5.9 1.2.9 2.1 0 .5-.1 1-.3 1.3l-.9 1.6-3 4.7h-3.4l2.3-4.7a3 3 0 0 1-1-1 3 3 0 0 1-.2-1.4c0-1 .3-1.8 1-2.5.7-.6 1.5-1 2.4-1zM50.5 1l-4.2 21h-5l.2-1.5a6.6 6.6 0 0 1-7.6 1c-1-.6-1.8-1.4-2.4-2.5-.6-1-1-2.3-1-3.7 0-1.7.5-3.2 1.2-4.5a8.5 8.5 0 0 1 3-3.2A8 8 0 0 1 39 6.4c2.2 0 3.8.7 4.7 2L45.1 1h5.4zM38.9 18c1.1 0 2-.5 2.7-1.3.7-.8 1-1.8 1-3a3 3 0 0 0-.8-2.2c-.5-.5-1.2-.8-2-.8-1.2 0-2 .4-2.7 1.2-.7.8-1 1.8-1 3.1 0 1 .2 1.6.7 2.2.5.5 1.2.7 2.1.7zM57.6 8.4c1.3-1.4 3.1-2 5.5-2l-.9 4.8H61c-1.2 0-2.2.2-3 .8-.7.6-1.1 1.5-1.4 2.8L55.1 22h-5.3l3-15.3H58l-.3 1.7zM17.1 33.5c1.3 0 2.3.4 3 1 .8.7 1.1 1.6 1.1 2.8l-.1 1.4-1.3 6.3h-2.6l1.2-6.2.1-1c0-1.3-.7-2-2.2-2-1.8 0-3 1.1-3.4 3.3L11.7 45H9l1.3-6.2v-1c0-1.3-.7-2-2.1-2-1.9 0-3 1.1-3.5 3.3L3.5 45H1L3 33.7h2.5l-.2 1.2c1-1 2.2-1.4 3.7-1.4.8 0 1.5.2 2.2.5.6.3 1 .8 1.3 1.4a5.9 5.9 0 0 1 4.5-1.9zM36.7 33.7L34.4 45h-2.5l.2-1.2c-1 1-2.2 1.3-3.7 1.3-1 0-1.8-.1-2.5-.5-.8-.4-1.4-1-1.8-1.8-.5-.7-.7-1.6-.7-2.6a7 7 0 0 1 .8-3.4 6.2 6.2 0 0 1 5.6-3.3c1.8 0 3.1.6 3.9 1.8l.3-1.6h2.7zM29 42.9a3.8 3.8 0 0 0 3.4-2c.3-.7.5-1.5.5-2.3 0-.9-.3-1.6-.8-2a3 3 0 0 0-2.2-.8 3.8 3.8 0 0 0-3.4 2c-.3.7-.5 1.4-.5 2.2 0 1 .3 1.6.8 2.1a3 3 0 0 0 2.2.8zM42.4 35.1a4 4 0 0 1 1.8-1.2c.7-.2 1.5-.4 2.5-.4l-.5 2.6-.6-.1c-2.2 0-3.5 1.1-4 3.4l-1 5.6h-2.7L40 33.7h2.6l-.3 1.4zM54.4 38.5l4 6.5h-3l-3-5-2.5 2-.6 3h-2.6l3.1-15.8h2.7l-1.9 9.4 6.2-5h3.7l-6 5zM71.4 38.5l-.2 1.6h-9c0 1.9 1.1 2.8 3.3 2.8l1.8-.3c.5-.2 1-.5 1.4-.9l1.1 1.9c-.6.5-1.3.9-2 1.2-.9.2-1.7.3-2.6.3-1.2 0-2.1-.2-3-.6-.8-.4-1.5-1-2-1.7a5 5 0 0 1-.6-2.6 7 7 0 0 1 .8-3.4 6 6 0 0 1 2.4-2.4c1-.6 2-.9 3.3-.9 1.6 0 2.9.5 3.8 1.4 1 .8 1.5 2 1.5 3.6zM66 35.7c-.9 0-1.7.2-2.3.7-.6.5-1 1.1-1.3 2H69c0-.9-.2-1.6-.8-2a3 3 0 0 0-2-.7zM76.4 41.2v.5c0 .8.4 1.3 1.3 1.3.5 0 1-.2 1.5-.5l.4 2a5 5 0 0 1-2.7.6c-1 0-1.8-.2-2.4-.8-.6-.5-.9-1.2-.9-2.2l.1-.9 1.1-5.3H73l.4-2.2h1.8l.5-2.5h2.7l-.5 2.5h3l-.4 2.2h-3l-1.1 5.3zM83.9 33.7h2.6L84.3 45h-2.7L84 33.7zm2-2c-.5 0-1 0-1.2-.3-.3-.3-.5-.7-.5-1.1 0-.5.2-.9.5-1.2.4-.3.8-.5 1.3-.5s.9.1 1.2.4c.3.3.4.6.4 1 0 .6-.1 1-.5 1.3-.3.3-.7.5-1.3.5zM96.2 33.5c1.3 0 2.3.4 3 1 .8.7 1.2 1.6 1.2 2.9l-.2 1.3-1.3 6.3h-2.6l1.2-6.2.1-.9c0-1.4-.7-2-2.3-2-1 0-1.7.2-2.4.8-.6.5-1 1.3-1.3 2.4L90.4 45h-2.6L90 33.7h2.6l-.3 1.2c1-1 2.3-1.4 4-1.4zM116 33.7l-2 9.6c-.4 2-1.2 3.6-2.3 4.5a7 7 0 0 1-4.7 1.5c-2.2 0-4-.5-5.3-1.6l1.4-2c.4.4 1 .7 1.7 1 .8.2 1.5.3 2.4.3 1.2 0 2.1-.3 2.8-.8a4 4 0 0 0 1.3-2.5v-.5c-1 .9-2.2 1.3-3.6 1.3-1 0-1.9-.2-2.7-.6-.7-.4-1.3-1-1.8-1.6-.4-.7-.6-1.6-.6-2.5a6.2 6.2 0 0 1 6.4-6.3c1 0 1.7.2 2.4.5.7.4 1.3.9 1.6 1.5l.4-1.8h2.5zm-7.7 8.5a4 4 0 0 0 2-.4c.6-.4 1-.8 1.3-1.4a4 4 0 0 0 .5-2c0-.8-.2-1.5-.7-2-.6-.4-1.3-.6-2.2-.6a4 4 0 0 0-2 .5c-.6.3-1.1.8-1.4 1.4a4 4 0 0 0-.5 2c0 .7.2 1.4.8 1.8.5.5 1.2.7 2.2.7z" />
              </svg>
            </Link>
          </h1>
          {children()}
        </div>

        <BarWrapper style={{ gridArea: 'RightBar' }}>
          <WideLink to="newsletter" verticalDown>
            sign up for newsletter
          </WideLink>
          <WideText verticalDown css={{ marginTop: 'auto' }}>
            ©2018
          </WideText>
        </BarWrapper>
      </div>
    </Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
