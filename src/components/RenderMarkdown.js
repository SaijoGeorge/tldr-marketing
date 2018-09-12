import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkShortcodes from 'remark-shortcodes'
import { css } from 'emotion'
import { Link } from 'gatsby'

import ExternalLink from './ExternalLink'

import { markdownStyles } from '../styles/typography'

const markdownStylesClassName = css(markdownStyles)
const responsiveIframeClassName = css({
  width: '100%',
  height: 0,
  position: 'relative',
  paddingTop: '56.25%',
  '> iframe': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    border: 0,
  },
})

const RenderMarkdown = ({ children, className = '', ...rest }) => (
  <ReactMarkdown
    renderers={{
      link: ExternalLink,
      shortcode: ({ identifier, attributes }) => {
        if (identifier === 'youtube' && attributes.id) {
          return (
            <div className={responsiveIframeClassName}>
              <iframe
                src={`https://www.youtube.com/embed/${attributes.id}`}
                title="Youtube video"
                allowfullscreen
              />
            </div>
          )
        } else if (identifier === 'vimeo' && attributes.id) {
          return (
            <div className={responsiveIframeClassName}>
              <iframe
                src={`https://player.vimeo.com/video/${attributes.id}`}
                title="Vimeo video"
                allowfullscreen
              />
            </div>
          )
        } else if (identifier === 'link' && attributes.to && attributes.text) {
          return <Link to={attributes.to}>{attributes.text}</Link>
        }

        return ''
      },
    }}
    escapeHtml={false}
    source={children}
    className={`${markdownStylesClassName} ${className}`}
    plugins={[[remarkShortcodes]]}
    {...rest}
  />
)

export default RenderMarkdown
