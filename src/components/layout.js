import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, withPrefix } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

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

const {
  min,
  max,
  media,
  space,
  colors,
  tools: { rem },
} = theme

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content="Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news."
            />
            <meta name="author" content="Saijo George" />
            <meta name="theme-color" content="#EFF5F8" />
            <meta
              name="google-site-verification"
              content="80K9pINH7T-5zO28ITfloeGP_rcF6EH8zPlv24NtKaE"
            />
            <meta
              name="msvalidate.01"
              content="89C6D119C6589A0D7695ABCD238F2C9D"
            />
            <meta name="yandex-verification" content="00fa43a53556943b" />
            <link
              href="https://fonts.googleapis.com/css?family=Nunito+Sans|Nunito:400,700,800,900"
              rel="stylesheet"
            />
            <link rel="manifest" href={withPrefix('/manifest.json')} />
            {/* <link rel="icon" href={withPrefix('/favicon.png')} /> */}
            <link rel="canonical" href="https://tldrmarketing.com" />

            <meta property="og:url" content="https://tldrmarketing.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="SEO News - 𝕥𝕝;𝕕𝕣 𝕄𝕒𝕣𝕜𝕖𝕥𝕚𝕟𝕘" />
            {/* <meta
          property="og:image"
          content="https://tldrmarketing.com/images/testimonials.png"
        /> */}
            <meta
              property="og:description"
              content="Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news."
            />
            <meta property="og:site_name" content="tl;dr Marketing" />
            <meta property="og:locale" content="en_US" />
            <meta property="article:author" content="Saijo George" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@SaijoGeorge" />
            <meta name="twitter:url" content="https://tldrmarketing.com" />
            <meta name="twitter:title" content="SEO News - 𝕥𝕝;𝕕𝕣 𝕄𝕒𝕣𝕜𝕖𝕥𝕚𝕟𝕘" />
            <meta
              name="twitter:description"
              content="Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news."
            />
            {/* <meta
          name="twitter:image"
          content="https://tldrmarketing.com/images/testimonials.png"
        /> */}
          </Helmet>

          <div
            css={{
              display: 'grid',
              height: '100vh',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              gridTemplate: `
            "Content"
            / 1fr
          `,
              [min(940)]: {
                gridTemplate: `
              "LeftBar . Content ."
              / ${rem(50)} 2.5% calc(92.5% - ${rem(50)}) 5%
            `,
              },
              [min(1130)]: {
                gridTemplate: `
              "LeftBar . Content . RightBar"
              / ${rem(80)} 2.5% calc(94% - ${rem(160)}) 3.5% ${rem(80)}
            `,
              },
            }}
          >
            <BarWrapper
              style={{ gridArea: 'LeftBar' }}
              css={{ [max(940 - 1)]: { display: 'none' } }}
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
                  margin: `${rem(space.md - space.xs)} 0`,
                  'a, svg': {
                    display: 'block',
                  },
                  a: {
                    padding: `${space.rem.xs} 0`,
                    color: colors.text.blue.light,
                    borderRadius: '50%',
                    transform: 'rotate(-90deg)',
                    transition: '.2s',
                    ':hover': {
                      color: colors.text.blue.dark,
                      transform: 'rotate(0deg)',
                    },
                  },
                }}
              >
                <li>
                  <a
                    href="http://linkedin.com/in/saijogeorge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="linkedIn" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com/saijogeorge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/saijogeorge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              "." ${rem(22)}
              "Logo" auto
              "." ${rem(22)}
              "Menu" auto
              "Content" 1fr
              / 1fr
            `,
                [min(940)]: {
                  gridTemplate: `
                ". ." ${space.rem.lg}
                "Logo Menu" auto
                ". ." ${space.rem.lg}
                "Content Content" 1fr
                / 20% 80%
              `,
                },
                [min(1130)]: {
                  gridTemplate: `
                ". ." ${space.rem.lg}
                "Logo Menu" auto
                ". ." ${space.rem.lg}
                "Content Content" 1fr
                / 25% 75%
              `,
                },
                [media.desktop]: {
                  gridTemplate: `
                ". ." ${space.rem.lg}
                "Logo Menu" auto
                ". ." ${space.rem.lg}
                "Content Content" 1fr
                / 25% ${rem(1000)}
              `,
                },
              }}
            >
              <div
                style={{ gridArea: 'Logo' }}
                css={{
                  display: 'flex',
                  paddingLeft: space.rem.md,
                  [media.mobileLg]: { paddingLeft: rem(24) },
                  [min(940)]: {
                    position: 'sticky',
                    zIndex: 4,
                    top: space.rem.lg,
                    paddingLeft: 0,
                  },
                }}
              >
                <Link
                  to="/"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '80%',
                    fontWeight: 800,
                    fontSize: 20,
                    lineHeight: 1,
                    color: colors.text.blue.dark,
                    background: 'rgba(239, 245, 248, 0.9)',
                    boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
                  }}
                >
                  tl;dr
                  <br />
                  marketing
                </Link>
                <ul css={{ display: 'flex', [min(940)]: { display: 'none' } }}>
                  <li>
                    <WideLink to="/sponsored">Sponsored</WideLink>
                  </li>
                  <li>
                    <WideLink to="/about">About</WideLink>
                  </li>
                </ul>
              </div>
              {children}
            </div>

            <BarWrapper
              style={{ gridArea: 'RightBar' }}
              css={{ [max(1130 - 1)]: { display: 'none' } }}
            >
              <WideLink to="newsletter" verticalDown>
                sign up for newsletter
              </WideLink>
              <WideText verticalDown css={{ marginTop: 'auto' }}>
                ©2018
              </WideText>
            </BarWrapper>
          </div>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
