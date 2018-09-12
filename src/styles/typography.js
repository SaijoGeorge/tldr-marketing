import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import TextTruncate from 'react-text-truncate'
import removeMd from 'remove-markdown'

import { media, space, colors } from './theme'
import { rem } from './tools'

export const paragraphStyles = {
  fontSize: rem(16),
  lineHeight: 1.6,
  color: colors.text.grey.body,
}

export const markdownStyles = {
  ...paragraphStyles,
  '> * + *': { marginTop: rem(14) },
  '> img + *, > * + img, > .EmbedVideo + *, > * + .EmbedVideo': {
    marginTop: rem(28),
  },
  '> p > img, > p > .EmbedVideo': { margin: `${rem(28)} auto` },
  'h1, h2, h3, h4, h5, h6': { fontWeight: 700 },
  h2: { fontSize: 24 },
  'h3, h4, h5, h6': { fontSize: 20 },
  li: {
    listStyle: 'disc',
    marginLeft: rem(19),
  },
  a: {
    color: colors.text.blue.medium,
    textDecoration: 'underline',
  },
  img: {
    display: 'block',
    maxHeight: '90vh',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

export const Paragraph = styled.p(
  paragraphStyles,
  ({ size }) => size === 'lg' && { fontSize: rem(48) }
)

export const Strong = styled.strong({ fontWeight: 800 })

export const Logo = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 800,
  fontSize: rem(20),
  lineHeight: 1,
  color: colors.text.blue.dark,
  background: 'rgba(239, 245, 248, 0.9)',
  boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
})

export const MediumHeading = styled.span({
  fontWeight: 800,
  fontSize: rem(18),
  lineHeight: 1.2,
  color: colors.text.blue.dark,
})

export const WideText = styled.span(
  {
    display: 'inline-block',
    padding: space.md,
    color: colors.text.blue.light,
    fontWeight: 900,
    fontSize: rem(10),
    textTransform: 'uppercase',
    letterSpacing: rem(2.5),
    [media.tabletMd]: {
      letterSpacing: rem(4),
    },
  },
  ({ verticalUp, verticalDown }) => ({
    writingMode: (verticalUp || verticalDown) && 'vertical-lr',
    transform: verticalUp && 'rotate(180deg)',
  })
)

export const WideButton = styled(WideText)({
  transition: '.2s',
  ':hover': {
    color: colors.text.blue.dark,
  },
}).withComponent('button')

export const WideLink = styled(WideText)({
  transition: '.2s',
  ':hover': {
    color: colors.text.blue.dark,
  },
}).withComponent(Link)

export const CategoryLabel = styled.div(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${rem(7)} ${rem(14)}`,
    position: 'relative',
    zIndex: 1,
    fontWeight: 800,
    fontSize: rem(14),
    textAlign: 'center',
    color: 'white',
    borderRadius: '5px',
    transition: '.2s',
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
    },
  },
  ({ color }) => ({ '::before': { background: color } })
)

export const CategoryLink = CategoryLabel.withComponent(Link)

export const DayDate = styled.span({
  fontWeight: 800,
  fontSize: rem(14),
  lineHeight: 1.2,
  [media._sm]: {
    fontWeight: 600,
    fontSize: rem(24),
  },
  [media._md]: {
    fontSize: rem(40),
  },
})

DayDate.Detail = styled.span({
  [media._sm]: {
    display: 'block',
    fontWeight: 700,
    fontSize: rem(14),
  },
  [media._md]: { fontSize: rem(18) },
})

export const PostCategoryLabel = styled.div({
  fontWeight: 800,
  fontSize: rem(12),
  color: 'white',
  whiteSpace: 'nowrap',
})

export const PostTitle = ({ bigger, truncate = false, children, ...rest }) => {
  const css = {
    fontWeight: 800,
    fontSize: rem(bigger ? 18 : 16),
    [media._sm]: { fontSize: rem(19) },
    color: colors.text.grey.heading,
  }

  return truncate ? (
    <TextTruncate
      textElement="h3"
      line={2}
      text={children}
      css={css}
      {...rest}
    />
  ) : (
    <h3 css={css} {...rest}>
      {children}
    </h3>
  )
}

export const PostURL = styled.span({
  display: 'block',
  marginTop: rem(3),
  fontSize: rem(14),
  color: colors.text.grey.body,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
})

export const PostSummary = Paragraph.withComponent(({ children, ...rest }) => (
  <TextTruncate
    textElement="p"
    line={2}
    truncateText="…"
    text={removeMd(children)}
    {...rest}
  />
))

export const PostSender = styled.div({
  fontSize: rem(13),
  color: colors.text.blue.light,
})

export const NavbarText = styled.span(
  {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
    fontWeight: 800,
    fontSize: rem(14),
    [media._sm]: {
      fontSize: rem(16),
    },
  },
  ({ size }) =>
    size === 'md' && {
      [media._sm]: { fontSize: rem(24) },
    }
)

export const NavbarLink = NavbarText.withComponent(Link)
