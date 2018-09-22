import React from 'react'

import { MediumHeading, WideLink } from '../styles/typography'

import { space, media } from '../styles/theme'
import { rem } from '../styles/tools'
import avatar from '../images/saijo-george.png'

const MediumHeading4 = MediumHeading.withComponent('h4')

const Author = props => (
  <div
    css={{
      [media.max._sm]: { display: 'none' },
      position: 'fixed',
      zIndex: 4,
      bottom: space.lg,
      background: 'rgba(239, 245, 248, 0.9)',
      boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
    }}
    {...props}
  >
    <img
      src={avatar}
      alt="Saijo George"
      css={{
        width: rem(45),
        height: rem(45),
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
    <MediumHeading4
      css={{
        marginTop: rem(13),
        marginBottom: rem(13),
      }}
    >
      Curated by
      <br />
      Saijo George
    </MediumHeading4>
    <WideLink to="/about" css={{ padding: 0 }}>
      Read more
    </WideLink>
  </div>
)

export default Author
