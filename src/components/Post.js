import React, { Fragment } from 'react'
import Toggle from 'react-toggled'
import parseURL from 'url-parse'
import Media from 'react-media'
import styled from 'react-emotion'

import ZoomableImg from './ZoomableImg'
import RenderMarkdown from '../components/RenderMarkdown'
import ExternalLink from '../components/ExternalLink'
import {
  Strong,
  WideLink,
  WideButton,
  PostTitle,
  PostURL,
  PostSummary,
  PostCategoryLabel as PostCategoryLabelType,
  PostSender,
} from '../styles/typography'

import { media, space, colors } from '../styles/theme'
import { rem } from '../styles/tools'
import categories from '../categories'

const PostLayout = styled.div(({ isOpen }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: isOpen ? 'wrap' : 'nowrap',
  position: 'relative',
  background: 'white',
  [media._sm]: {
    flexWrap: 'nowrap',
    padding: rem(20),
    paddingBottom: 0,
  },
  [media.max._sm]: {
    ...(isOpen && {
      borderBottom: 'none !important',
      marginTop: rem(30),
      marginBottom: `${rem(30)} !important`,
    }),
  },
}))

const PostContent = styled.div(({ isOpen }) => ({
  flexBasis: isOpen ? '100%' : '62%',
  order: isOpen ? 2 : 1,
  padding: space.md,
  paddingBottom: space.sm,
  [media.mobileLg]: {
    padding: rem(24),
    paddingBottom: rem(12),
  },
  [media._sm]: {
    flexBasis: '65%',
    padding: rem(12),
    paddingRight: rem(24),
    order: 1,
  },
  overflow: 'hidden',
}))

const PostFigure = styled.div(({ isOpen }) => ({
  alignSelf: 'stretch',
  flexBasis: isOpen ? '100%' : '38%',
  order: isOpen ? 1 : 2,
  position: 'relative',
  [media.max._sm]: {
    '::after': {
      content: '""',
      width: '100%',
      height: '1px',
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, .07)',
    },
  },
  [media._sm]: {
    alignSelf: 'flex-start',
    flexBasis: '35%',
    marginBottom: rem(20),
    order: 2,
  },
}))

const PostImg = styled.img({
  display: 'block',
  width: '100%',
})

const PostThumb = React.forwardRef(({ src, alt, ...rest }, ref) => (
  <div
    ref={ref}
    role="img"
    aria-label={alt}
    css={{
      height: '100%',
      position: 'relative',
      zIndex: 0,
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundColor: colors.bg.blue.normal,
      backgroundBlendMode: 'luminosity',
      [media._sm]: {
        border: 'solid 1px #e0ebf1',
        borderRadius: 5,
      },
      '::after': {
        content: '""',
        display: 'block',
        width: '100%',
        height: 0,
        position: 'relative',
        zIndex: 1,
        paddingBottom: '58%',
      },
      ':hover': {
        cursor: 'zoom-in',
        backgroundBlendMode: 'normal',
      },
    }}
    {...rest}
  />
))

const PostZoomableThumb = ({ img, ...rest }) => (
  <ZoomableImg img={{ ...img, msrc: img.src }}>
    {({ getOpenerProps }) => (
      <PostThumb {...getOpenerProps()} src={img.src} alt={img.alt} {...rest} />
    )}
  </ZoomableImg>
)

const PostImgPlaceholder = styled.div(
  {
    height: '100%',
    position: 'relative',
    zIndex: 0,
    backgroundColor: colors.bg.grey.lightest,
    [media._sm]: {
      backgroundColor: 'transparent',
      border: `solid 1px ${colors.border.blue.light}`,
      borderRadius: '5px',
    },
    '::before': {
      content: '"- No media -"',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
      color: colors.text.blue.light,
      fontWeight: 900,
      fontSize: rem(10),
      textTransform: 'uppercase',
      letterSpacing: rem(4),
    },
    '::after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: 0,
      position: 'relative',
      zIndex: 1,
      paddingBottom: '58%',
    },
  },
  ({ short }) => short && { '::after': { paddingBottom: '30%' } }
)

const PostLink = styled(ExternalLink)({
  display: 'block',
  borderRadius: '2px',
  transition: 'box-shadow .3s',
  boxShadow: `0 0 0 5px white, 0 0 0 5px transparent`,
  ':hover': {
    boxShadow: `0 0 0 5px white, 0 0 0 8px ${colors.border.blue.normal}`,
  },
})

export const PostCategoryLabel = ({
  isOpen,
  bottom,
  color,
  children,
  ...rest
}) => (
  <div
    css={{
      position: 'absolute',
      zIndex: 1,
      left: isOpen ? rem(16 - 1) : '62%',
      [media.mobileLg]: {
        left: isOpen ? rem(24 - 1) : '62%',
      },
      top: bottom ? null : 0,
      bottom: bottom ? 0 : null,
      [media._sm]: {
        left: '100%',
        paddingTop: '24%',
        transform: 'translateY(-50%)',
      },
    }}
    {...rest}
  >
    <PostCategoryLabelType
      css={{
        padding: `${rem(4)} ${rem(16)}`,
        backgroundColor: color,
        borderRadius: bottom ? '7px 7px 0 0' : '0 0 7px 0',
        border: bottom ? 'solid 1px' : null,
        borderRight: bottom ? null : 'solid 1px',
        borderBottom: bottom ? 'none' : 'solid 1px',
        [media._sm]: {
          padding: `${rem(16)} ${rem(4)}`,
          writingMode: 'vertical-lr',
          borderRadius: '0 5px 5px 0',
        },
      }}
    >
      {children}
    </PostCategoryLabelType>
  </div>
)

const Arrow = ({ direction = 'bottom' }) => (
  <svg
    css={{
      width: rem(9),
      height: rem(6),
      [media._sm]: {
        width: rem(10),
        height: rem(7),
      },
    }}
    viewBox="0 0 10 7"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M0 0L4 4L8 0"
      transform={
        {
          bottom: 'translate(1 1)',
          top: 'translate(9 6) rotate(-180)',
        }[direction]
      }
      strokeWidth="1.6"
    />
  </svg>
)

const Post = ({
  data: { title, url, img, senderName, senderURL, description, category },
  ...rest
}) => {
  const { hostname, pathname, query, hash } = parseURL(url)
  const externalURL = `${url}?utm_source=tldrmarketing.com&utm_medium=referral`
  const fullURL = hostname + pathname + query + hash

  const categoryColor =
    category === 'sponsored' ? colors.bg.blue.dark : categories[category].color
  const categoryLabel =
    category === 'sponsored' ? 'Sponsored' : categories[category].label

  const showSender = senderName || senderURL
  const senderLabel = showSender && (
    <Fragment>
      Submitted by:{' '}
      <Strong>
        {senderURL ? (
          <ExternalLink noindex href={senderURL}>
            {senderName}
          </ExternalLink>
        ) : (
          senderName
        )}
      </Strong>
    </Fragment>
  )

  return (
    <Toggle>
      {({ on: isOpen, setOn: open, setOff: close }) => (
        <Media query={media.query._sm}>
          {isDesktop => (
            <PostLayout isOpen={isOpen} {...rest}>
              {(isDesktop || (!isDesktop && !isOpen)) && (
                <PostCategoryLabel isOpen={isOpen} color={categoryColor}>
                  {categoryLabel}
                </PostCategoryLabel>
              )}

              <PostContent isOpen={isOpen}>
                <Toggle>
                  {({
                    on: showFullURL,
                    setOn: onMouseOver,
                    setOff: onMouseLeave,
                  }) => (
                    <PostLink
                      href={externalURL}
                      {...isDesktop && { onMouseOver, onMouseLeave }}
                    >
                      <PostTitle
                        bigger={isOpen}
                        truncate={isOpen ? null : { lines: 2 }}
                      >
                        {title}
                      </PostTitle>
                      <PostURL>{showFullURL ? fullURL : hostname}</PostURL>
                    </PostLink>
                  )}
                </Toggle>

                {isOpen ? (
                  <RenderMarkdown css={{ marginTop: rem(20) }}>
                    {description}
                  </RenderMarkdown>
                ) : (
                  <PostSummary
                    css={{
                      [media.max.tablet]: { display: 'none' },
                      marginTop: rem(20),
                    }}
                  >
                    {description}
                  </PostSummary>
                )}

                <div css={{ display: 'flex' }}>
                  {isOpen && (
                    <WideButton
                      onClick={close}
                      css={{
                        flex: 1,
                        paddingTop: rem(24),
                        paddingLeft: 0,
                        textAlign: 'left',
                        cursor: 'pointer',
                        outline: 'none',
                        fontSize: rem(10),
                      }}
                    >
                      Show less <Arrow direction="top" />
                    </WideButton>
                  )}

                  {!isOpen && (
                    <WideLink
                      to={`/links/abc123`}
                      rel="nofollow"
                      onClick={e => {
                        e.preventDefault()
                        open()
                      }}
                      css={{
                        flex: 1,
                        paddingTop: rem(24),
                        paddingLeft: 0,
                        fontSize: rem(10),
                      }}
                    >
                      Show more <Arrow direction="bottom" />
                    </WideLink>
                  )}

                  {isOpen &&
                    showSender && (
                      <PostSender
                        css={{
                          [media._sm]: { display: 'none' },
                          marginTop: rem(22),
                        }}
                      >
                        {senderLabel}
                      </PostSender>
                    )}
                </div>
              </PostContent>

              <PostFigure isOpen={isOpen}>
                {!img && (
                  <PostImgPlaceholder
                    onClick={open}
                    short={!isDesktop && isOpen}
                  />
                )}

                {img && isDesktop && <PostZoomableThumb img={img} />}

                {img &&
                  !isDesktop &&
                  !isOpen && (
                    <PostThumb onClick={open} src={img.src} alt={img.alt} />
                  )}

                {img &&
                  !isDesktop &&
                  isOpen && <PostImg src={img.src} alt={img.alt} />}

                {isOpen &&
                  showSender && (
                    <PostSender
                      css={{
                        [media.max._sm]: { display: 'none' },
                        marginTop: rem(13),
                      }}
                    >
                      {senderLabel}
                    </PostSender>
                  )}

                {isOpen &&
                  !isDesktop && (
                    <PostCategoryLabel
                      isOpen={isOpen}
                      color={categoryColor}
                      bottom
                    >
                      {categoryLabel}
                    </PostCategoryLabel>
                  )}
              </PostFigure>
            </PostLayout>
          )}
        </Media>
      )}
    </Toggle>
  )
}

export default Post
