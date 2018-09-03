import React from 'react'
import Toggle from 'react-toggled'
import parseURL from 'url-parse'
import ReactMarkdown from 'react-markdown'
import removeMd from 'remove-markdown'
import TextTruncate from 'react-text-truncate'
import Media from 'react-media'

import ZoomImg from '../components/ZoomImg'
import { WideLink, WideButton } from '../styles/typography'

import { media, space, colors } from '../styles/theme'
import { min, max, rem } from '../styles/tools'
import categories from '../categories'

const Post = ({
  data: { title, url, img, senderName, senderTwitter, description, category },
}) => {
  const { hostname, pathname, query, hash } = parseURL(url)
  const externalURL = `${url}?utm_source=tldrmarketing.com&utm_medium=referral`
  const fullURL = hostname + pathname + query + hash

  return (
    <Toggle>
      {({ on, setOn, setOff }) => (
        <li
          className="post"
          css={{
            position: 'relative',
            [min(940)]: { padding: rem(20), paddingBottom: 0 },
            background: '#fff',
            [max(940 - 1)]: {
              ...(on && {
                borderBottom: 'none !important',
                marginTop: rem(30),
                marginBottom: `${rem(30)} !important`,
              }),
            },
          }}
        >
          <div
            css={{
              position: 'absolute',
              zIndex: 1,
              left: on ? 0 : '58%',
              top: 0,
              [min(940)]: {
                left: '100%',
                paddingTop: '24%',
                transform: 'translateY(-50%)',
              },
            }}
          >
            <div
              css={{
                padding: `${rem(4)} ${rem(16)}`,
                fontWeight: 800,
                fontSize: rem(12),
                color: '#fff',
                whiteSpace: 'nowrap',
                background:
                  category === 'sponsored'
                    ? '#253e5b'
                    : categories[category].color,
                borderRadius: '0 0 5px 0',
                [min(940)]: {
                  padding: `${rem(16)} ${rem(4)}`,
                  writingMode: 'vertical-lr',
                  borderRadius: '0 5px 5px 0',
                },
              }}
            >
              {category === 'sponsored'
                ? 'Sponsored'
                : categories[category].label}
            </div>
          </div>
          <article
            css={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: on ? 'wrap' : 'nowrap',
              [min(940)]: { flexWrap: 'nowrap' },
            }}
          >
            <div
              css={{
                flexBasis: on ? '100%' : '58%',
                order: on ? 2 : 1,
                padding: space.rem.md,
                paddingBottom: space.rem.sm,
                [media.mobileLg]: {
                  padding: rem(24),
                  paddingBottom: rem(12),
                },
                [min(940)]: {
                  flexBasis: '65%',
                  padding: rem(12),
                  paddingRight: rem(24),
                  order: 1,
                },
                overflow: 'hidden',
              }}
            >
              <Media query="(min-width: 940px)">
                {matches => (
                  <Toggle>
                    {({
                      on: showFullURL,
                      setOn: onMouseOver,
                      setOff: onMouseLeave,
                    }) => (
                      <a
                        {...matches && { onMouseOver, onMouseLeave }}
                        href={externalURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        css={{
                          display: 'block',
                          borderRadius: 2,
                          ':hover': {
                            boxShadow: '0 0 0 5px #fff, 0 0 0 8px #add2e4',
                          },
                        }}
                      >
                        {on ? (
                          <h3
                            css={{
                              fontWeight: 800,
                              fontSize: rem(18),
                              [min(940)]: { fontSize: rem(19) },
                              color: '#333',
                            }}
                          >
                            {title}
                          </h3>
                        ) : (
                          <TextTruncate
                            element="h3"
                            line={2}
                            truncateText="…"
                            text={title}
                            css={{
                              fontWeight: 800,
                              fontSize: rem(16),
                              [min(940)]: { fontSize: rem(19) },
                              color: '#333',
                            }}
                          />
                        )}
                        <span
                          css={{
                            display: 'block',
                            marginTop: 3,
                            fontSize: rem(14),
                            color: '#777',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                          }}
                        >
                          {showFullURL ? fullURL : hostname}
                        </span>
                      </a>
                    )}
                  </Toggle>
                )}
              </Media>
              {on ? (
                <ReactMarkdown
                  renderers={{
                    link: props => (
                      // eslint-disable-next-line
                      <a target="_blank" rel="noopener noreferrer" {...props} />
                    ),
                  }}
                  source={description}
                  css={{
                    marginTop: rem(13),
                    fontSize: rem(16),
                    lineHeight: 1.6,
                    color: '#777',
                    '> * + *': {
                      marginTop: 16,
                    },
                    li: {
                      listStyle: 'disc',
                      marginLeft: 36,
                    },
                    a: {
                      color: '#3186b1',
                      textDecoration: 'underline',
                    },
                  }}
                />
              ) : (
                <TextTruncate
                  element="p"
                  line={2}
                  truncateText="…"
                  text={removeMd(description)}
                  css={{
                    [max(940 - 1)]: {
                      display: 'none',
                    },
                    marginTop: rem(13),
                    fontSize: rem(16),
                    lineHeight: 1.6,
                    color: '#777',
                  }}
                />
              )}
              {on ? (
                <WideButton
                  onClick={setOff}
                  css={{
                    display: 'block',
                    width: '100%',
                    paddingTop: rem(16),
                    paddingLeft: 0,
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none',
                    fontSize: rem(10),
                  }}
                >
                  Show less{' '}
                  <svg
                    css={{
                      width: 9,
                      height: 6,
                      [min(940)]: {
                        width: 10,
                        height: 7,
                      },
                    }}
                    viewBox="0 0 10 7"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M0 0L4 4L8 0"
                      transform="translate(9 6) rotate(-180)"
                      strokeWidth="1.6"
                    />
                  </svg>
                </WideButton>
              ) : (
                <WideLink
                  to={`/links/abc123`}
                  rel="nofollow"
                  onClick={e => {
                    e.preventDefault()
                    setOn()
                  }}
                  css={{
                    display: 'block',
                    paddingTop: rem(16),
                    paddingLeft: 0,
                    fontSize: rem(10),
                  }}
                >
                  Show more{' '}
                  <svg
                    css={{
                      width: 9,
                      height: 6,
                      [min(940)]: {
                        width: 10,
                        height: 7,
                      },
                    }}
                    viewBox="0 0 10 7"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M0 0L4 4L8 0"
                      transform="translate(1 1)"
                      strokeWidth="1.6"
                    />
                  </svg>
                </WideLink>
              )}
            </div>
            <div
              css={{
                alignSelf: 'stretch',
                flexBasis: on ? '100%' : '42%',
                order: on ? 1 : 2,
                [min(940)]: {
                  alignSelf: 'flex-start',
                  flexBasis: '35%',
                  marginBottom: rem(20),
                  order: 2,
                },
              }}
            >
              {img ? (
                <Media query="(min-width: 940px)">
                  {matches =>
                    matches ? (
                      <ZoomImg img={{ ...img, msrc: img.src }} />
                    ) : on ? (
                      <img
                        src={img.src}
                        alt={img.alt}
                        css={{
                          width: '100%',
                          borderBottom: 'solid 1px #e0ebf1',
                        }}
                      />
                    ) : (
                      <div
                        onClick={setOn}
                        role="img"
                        aria-label={img.alt}
                        css={{
                          height: '100%',
                          position: 'relative',
                          zIndex: 0,
                          backgroundImage: `url(${img.src})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          '::after': {
                            content: '""',
                            display: 'block',
                            width: '100%',
                            height: 0,
                            position: 'relative',
                            zIndex: 1,
                            paddingBottom: '58%',
                          },
                        }}
                      />
                    )
                  }
                </Media>
              ) : (
                <Media query="(min-width: 940px)">
                  {matches =>
                    on && !matches ? (
                      <div css={{ height: 30 }} />
                    ) : (
                      <div
                        onClick={setOn}
                        css={{
                          height: '100%',
                          position: 'relative',
                          zIndex: 0,
                          backgroundColor: '#f6f6f6',
                          [min(940)]: {
                            backgroundColor: 'transparent',
                            border: 'solid 1px #e0ebf1',
                            borderRadius: 5,
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
                        }}
                      />
                    )
                  }
                </Media>
              )}
              {on &&
                (senderName || senderTwitter) && (
                  <div
                    css={{
                      display: 'none',
                      [min(940)]: { display: 'block' },
                      marginTop: rem(13),
                      fontSize: rem(14),
                      color: '#777',
                    }}
                  >
                    Submitted by:{' '}
                    {senderTwitter ? (
                      <a
                        href={`https://twitter.com/${senderTwitter}`}
                        target="_blank"
                        rel="noindex noopener noreferrer"
                        css={{ fontWeight: 800 }}
                      >
                        {senderName || senderTwitter}
                      </a>
                    ) : (
                      <strong css={{ fontWeight: 800 }}>{senderName}</strong>
                    )}
                  </div>
                )}
            </div>
          </article>
        </li>
      )}
    </Toggle>
  )
}

export default Post
