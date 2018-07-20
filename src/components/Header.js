import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import Logo from './Logo'

const HeaderWrapper = styled.header(({ theme: { media, colors, space } }) => ({
  padding: space.rem.md,
  [media.tablet]: { padding: space.rem.lg },
  color: colors.text.blue.dark,
}))

const Header = () => (
  <HeaderWrapper>
    <h1>
      <Link to="/">
        <Logo width={120} />
      </Link>
    </h1>
  </HeaderWrapper>
)

export default Header
