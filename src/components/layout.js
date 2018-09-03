import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import { Logo, WideText, WideLink } from '../styles/typography'
import SocialIcon from './SocialIcon'

import '../styles/global'
import { media, space, colors } from '../styles/theme'
import { min, max, rem } from '../styles/tools'

const OuterLayout = styled.div({
  display: 'grid',
  height: '100vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  gridTemplate: `
    "OuterLayoutContent"
    / 1fr
  `,
  [min(940)]: {
    gridTemplate: `
      "OuterLayoutLeftBar . OuterLayoutContent ."
      / ${rem(50)} 2.5% calc(92.5% - ${rem(50)}) 5%
    `,
  },
  [min(1130)]: {
    gridTemplate: `
      "OuterLayoutLeftBar . OuterLayoutContent . OuterLayoutRightBar"
      / ${rem(80)} 2.5% calc(94% - ${rem(160)}) 3.5% ${rem(80)}
    `,
  },
})

const InnerLayout = styled.div({
  display: 'grid',
  gridTemplate: `
    "." ${rem(22)}
    "InnerLayoutNavbar" auto
    "." ${rem(22)}
    "InnerLayoutMenu" auto
    "InnerLayoutContent" 1fr
    / 1fr
  `,
  [min(940)]: {
    gridTemplate: `
      ". ." ${space.rem.lg}
      "InnerLayoutNavbar InnerLayoutMenu" auto
      ". ." ${space.rem.lg}
      "InnerLayoutContent InnerLayoutContent" 1fr
      / 20% 80%
    `,
  },
  [min(1130)]: {
    gridTemplate: `
      ". ." ${space.rem.lg}
      "InnerLayoutNavbar InnerLayoutMenu" auto
      ". ." ${space.rem.lg}
      "InnerLayoutContent InnerLayoutContent" 1fr
      / 25% 75%
    `,
  },
  [media.desktop]: {
    gridTemplate: `
      ". ." ${space.rem.lg}
      "InnerLayoutNavbar InnerLayoutMenu" auto
      ". ." ${space.rem.lg}
      "InnerLayoutContent InnerLayoutContent" 1fr
      / 25% ${rem(1000)}
    `,
  },
})

const StyledBar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  position: 'sticky',
  top: 0,
  color: colors.text.blue.dark,
  padding: `${space.rem.md} ${space.rem.lg}`,
})

const SocialIconsBlock = props => (
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
    {...props}
  >
    <li>
      <a
        href="http://linkedin.com/in/saijogeorge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon="linkedIn" />
      </a>
    </li>
    <li>
      <a
        href="http://facebook.com/saijogeorge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon="facebook" />
      </a>
    </li>
    <li>
      <a
        href="http://twitter.com/saijogeorge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon icon="twitter" />
      </a>
    </li>
    <li>
      <a href="mailto:contact@tldrmarketing.com">
        <SocialIcon icon="mail" />
      </a>
    </li>
  </ul>
)

const LeftBarBlock = props => (
  <StyledBar css={{ [max(940 - 1)]: { display: 'none' } }} {...props}>
    <WideLink verticalUp to="/about">
      about
    </WideLink>
    <WideLink verticalUp to="/sponsored">
      sponsored
    </WideLink>
    <WideText verticalUp css={{ marginTop: 'auto' }}>
      share
    </WideText>
    <SocialIconsBlock />
  </StyledBar>
)

const RightBarBlock = props => (
  <StyledBar css={{ [max(1130 - 1)]: { display: 'none' } }} {...props}>
    <WideLink to="newsletter" verticalDown>
      sign up for newsletter
    </WideLink>
    <WideText verticalDown css={{ marginTop: 'auto' }}>
      ©2018
    </WideText>
  </StyledBar>
)

const NavbarBlock = props => (
  <div
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
    {...props}
  >
    <Logo to="/" css={{ width: '80%' }}>
      tl;dr
      <br />
      marketing
    </Logo>
    <ul css={{ display: 'flex', [min(940)]: { display: 'none' } }}>
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
          <LeftBarBlock style={{ gridArea: 'OuterLayoutLeftBar' }} />
          <InnerLayout style={{ gridArea: 'OuterLayoutContent' }}>
            <NavbarBlock style={{ gridArea: 'InnerLayoutNavbar' }} />
            {children}
          </InnerLayout>
          <RightBarBlock style={{ gridArea: 'OuterLayoutRightBar' }} />
        </OuterLayout>
      </>
    )}
  />
)

export default Layout
