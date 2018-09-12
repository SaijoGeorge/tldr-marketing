import React from 'react'

import { NavbarLink } from '../styles/typography'

import { em } from '../styles/tools'

const GoBackLink = () => (
  <NavbarLink to="/">
    <svg
      viewBox="0 0 24 24"
      css={{
        width: em(26),
        height: em(26),
        marginRight: em(5),
        fill: 'currentColor',
      }}
    >
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>
    Go back
  </NavbarLink>
)

export default GoBackLink
