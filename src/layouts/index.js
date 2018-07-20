import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { ThemeProvider } from 'emotion-theming'

import theme from '../styles/theme'
import '../styles/minireset.css'
import '../styles/global'

import BarWrapper from '../components/BarWrapper'
import WideText from '../components/WideText'
import WideLink from '../components/WideLink'
import Icon from '../components/Icon'
import Logo from '../components/Logo'

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
          minWidth: 1270,
          height: '100vh',
          gridTemplate: `
            "LeftBar Logo    Menu . RightBar" auto
            "LeftBar Sidebar Content    . RightBar" 1fr
            / ${rem(80)} 25% 1fr 8% ${rem(80)}
          `,
          overflow: 'auto',
        }}
      >
        <BarWrapper
          style={{ gridArea: 'LeftBar' }}
          css={{ position: 'sticky', top: 0 }}
        >
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
              <a href="#" target="_blank">
                <Icon icon="linkedIn" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <Icon icon="facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <Icon icon="twitter" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <Icon icon="mail" />
              </a>
            </li>
          </ul>
        </BarWrapper>
        <h1
          style={{ gridArea: 'Logo' }}
          css={{
            position: 'sticky',
            top: 0,
            padding: theme.space.rem.lg,
            color: theme.colors.text.blue.dark,
          }}
        >
          <Link to="/">
            <Logo width={120} />
          </Link>
        </h1>
        {children()}
        <BarWrapper
          style={{ gridArea: 'RightBar' }}
          css={{ position: 'sticky', top: 0 }}
        >
          <WideText verticalDown>sign up for newsletter</WideText>
          <WideText verticalDown style={{ marginTop: 'auto' }}>
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
