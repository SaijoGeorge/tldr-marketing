import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import SocialIcon from './SocialIcon'
import ExternalLink from './ExternalLink'
import { OuterLayout, InnerLayout } from '../styles/layouts'
import { Logo, WideText, WideLink } from '../styles/typography'

import '../styles/global'
import { media, space, colors } from '../styles/theme'
import { rem } from '../styles/tools'

const Bar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  position: 'sticky',
  top: 0,
  padding: `${space.md} ${space.lg}`,
})

const SocialIcons = props => (
  <ul
    css={{
      margin: `${rem(space.px.md - space.px.xs)} 0`,
      'a, svg': {
        display: 'block',
      },
      a: {
        padding: `${space.xs} 0`,
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
    {...props}
  >
    <li>
      <ExternalLink href="http://linkedin.com/in/saijogeorge">
        <SocialIcon icon="linkedIn" />
      </ExternalLink>
    </li>
    <li>
      <ExternalLink href="http://facebook.com/saijogeorge">
        <SocialIcon icon="facebook" />
      </ExternalLink>
    </li>
    <li>
      <ExternalLink href="http://twitter.com/saijogeorge">
        <SocialIcon icon="twitter" />
      </ExternalLink>
    </li>
    <li>
      <a href="mailto:contact@tldrmarketing.com">
        <SocialIcon icon="mail" />
      </a>
    </li>
  </ul>
)

const LeftBar = props => (
  <Bar css={{ [media.max._sm]: { display: 'none' } }} {...props}>
    <WideLink verticalUp to="/about">
      about
    </WideLink>
    <WideLink verticalUp to="/sponsored">
      sponsored
    </WideLink>
    <WideText verticalUp css={{ marginTop: 'auto' }}>
      share
    </WideText>
    <SocialIcons />
  </Bar>
)

const RightBar = props => (
  <Bar css={{ [media.max._md]: { display: 'none' } }} {...props}>
    <WideLink to="newsletter" verticalDown>
      sign up for newsletter
    </WideLink>
    <WideText verticalDown css={{ marginTop: 'auto' }}>
      ©2018
    </WideText>
  </Bar>
)

const Navbar = props => (
  <div
    css={{
      display: 'flex',
      paddingLeft: space.md,
      [media.mobileLg]: { paddingLeft: rem(24) },
      [media._sm]: {
        position: 'sticky',
        zIndex: 4,
        top: space.lg,
        paddingLeft: 0,
      },
    }}
    {...props}
  >
    <Logo to="/" css={{ width: '80%' }}>
      tl;dr
      <br />
      marketing
    </Logo>
    <ul css={{ display: 'flex', [media._sm]: { display: 'none' } }}>
      <li>
        <WideLink to="/sponsored">Sponsored</WideLink>
      </li>
      <li>
        <WideLink to="/about">About</WideLink>
      </li>
    </ul>
  </div>
)

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
      <>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content="Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news."
          />
          <meta name="author" content="Saijo George" />
          <meta name="theme-color" content={colors.bg.blue.light} />
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

        <OuterLayout>
          <LeftBar style={{ gridArea: 'OuterLayoutLeftBar' }} />
          <InnerLayout style={{ gridArea: 'OuterLayoutContent' }}>
            <Navbar style={{ gridArea: 'InnerLayoutNavbar' }} />
            {children}
          </InnerLayout>
          <RightBar style={{ gridArea: 'OuterLayoutRightBar' }} />
        </OuterLayout>
      </>
    )}
  />
)

export default Layout
