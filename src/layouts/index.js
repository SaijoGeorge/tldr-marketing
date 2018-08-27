import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link, { withPrefix } from 'gatsby-link'

import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import theme from '../styles/theme'
import '../styles/global'

import WideText from '../components/WideText'
import WideLink from '../components/WideLink'
import Icon from '../components/Icon'

const BarWrapper = styled.div(({ theme: { colors, space, min } }) => ({
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

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
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
        <meta name="msvalidate.01" content="89C6D119C6589A0D7695ABCD238F2C9D" />
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
                rel="noopener"
              >
                <Icon icon="linkedIn" />
              </a>
            </li>
            <li>
              <a
                href="http://facebook.com/saijogeorge"
                target="_blank"
                rel="noopener"
              >
                <Icon icon="facebook" />
              </a>
            </li>
            <li>
              <a
                href="http://twitter.com/saijogeorge"
                target="_blank"
                rel="noopener"
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
                color: colors.text.blue.dark,
                background: 'rgba(239, 245, 248, 0.9)',
                boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
              }}
            >
              <svg
                viewBox="0 0 45 45"
                css={{
                  flexShrink: 0,
                  display: 'block',
                  width: 35,
                  [min(480)]: { width: 45 },
                }}
              >
                <circle fill="#263E5B" cx="22.5" cy="22.5" r="22.5" />
                <path
                  fill="#4F87EC"
                  d="M24.3,25c-0.6,0.5-1.2,0.7-1.8,0.6c-0.6-0.1-1.2-0.4-1.6-1l-7.8-9.9l-3,2.3c-0.6,0.5-1.2,0.7-1.7,0.7
              c-0.5,0-1-0.3-1.4-0.9c-0.4-0.5-0.6-1-0.5-1.5c0.1-0.5,0.5-1,1.1-1.5l9.9-7.7c0.6-0.5,1.2-0.7,1.7-0.7c0.5,0,1,0.3,1.4,0.8
              c0.4,0.5,0.6,1.1,0.5,1.6c-0.1,0.5-0.5,1-1.1,1.4l-3,2.3l7.8,9.9c0.4,0.6,0.6,1.2,0.5,1.8C25.3,24,24.9,24.6,24.3,25z"
                />
                <path
                  fill="#D95040"
                  d="M27,20.7c-0.6-0.1-0.9-0.4-1.1-0.8c-0.2-0.4-0.2-0.8-0.1-1.4l2.9-10.7c0.1-0.6,0.4-0.9,0.8-1.2
              c0.4-0.2,0.9-0.3,1.5-0.1c0.6,0.2,1,0.4,1.2,0.9c0.2,0.4,0.3,0.9,0.2,1.4l-2.5,9.5l4.6,1.2c1.2,0.3,1.6,1,1.3,2
              c-0.1,0.5-0.4,0.8-0.7,1c-0.3,0.2-0.8,0.2-1.4,0L27,20.7z"
                />
                <path
                  fill="#F3BD42"
                  d="M13.5,23.8c0.3-0.3,0.7-0.5,1.1-0.5c0.4,0,0.7,0.2,1.1,0.5l6.9,6.9c0.4,0.4,0.5,0.7,0.5,1.1
              c0,0.4-0.2,0.7-0.5,1.1l-2.6,2.6c-1,1-2,1.7-3.1,2c-1.1,0.4-2.2,0.4-3.2,0.1c-1.1-0.3-2.1-0.9-3-1.8c-0.9-0.9-1.6-1.9-1.9-3
              c-0.3-1-0.3-2.1,0.1-3.2c0.4-1.1,1-2.1,2-3.1L13.5,23.8z M13,28.1c-0.9,0.9-1.3,1.7-1.3,2.6c0,0.9,0.4,1.8,1.3,2.7
              c0.9,0.9,1.8,1.3,2.6,1.3c0.9,0,1.7-0.4,2.6-1.3l1.1-1.1L14.1,27L13,28.1z"
                />
                <path
                  fill="#58A45C"
                  d="M36.7,33.8c0.3,0.2,0.4,0.5,0.5,0.7c0.1,0.3,0,0.6-0.2,0.9c-0.2,0.3-0.5,0.5-0.8,0.6c-0.2,0.1-0.5,0.1-0.7,0
              c-0.2-0.1-0.5-0.2-0.7-0.4L32,33.3c-0.2-0.2-0.4-0.3-0.6-0.3c-0.2-0.1-0.4-0.1-0.6,0l-1,0.3l0.7,2.7c0.1,0.4,0.1,0.8-0.1,1.1
              c-0.2,0.3-0.5,0.5-0.9,0.6c-0.4,0.1-0.8,0.1-1.1-0.1c-0.3-0.2-0.5-0.5-0.6-0.9l-2.2-8.2c-0.1-0.4-0.1-0.8,0.1-1.1
              c0.2-0.3,0.5-0.5,0.9-0.6l3.8-1c1.3-0.3,2.4-0.3,3.2,0.1c0.8,0.4,1.4,1.1,1.6,2.2c0.2,0.8,0.2,1.6-0.1,2.3c-0.3,0.7-0.8,1.2-1.6,1.6
              c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.3,1,0.6L36.7,33.8z M31.2,30.6c0.6-0.2,1-0.4,1.3-0.6c0.2-0.3,0.3-0.6,0.2-1.1
              c-0.1-0.4-0.3-0.7-0.7-0.9c-0.3-0.1-0.8-0.1-1.4,0.1l-2,0.5l0.7,2.5L31.2,30.6z"
                />
              </svg>
              <span
                css={{
                  marginTop: 1,
                  marginLeft: 8,
                  fontWeight: 800,
                  fontSize: 16,
                  lineHeight: 1,
                  [min(480)]: { marginLeft: 15, fontSize: 20 },
                }}
              >
                tl;dr<br />marketing
              </span>
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
          {children()}
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
