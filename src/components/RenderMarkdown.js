import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkShortcodes from 'remark-shortcodes'
import { css } from 'emotion'
import { Link } from 'gatsby'

import ExternalLink from './ExternalLink'
import EmbedVideo from './EmbedVideo'

import { markdownStyles } from '../styles/typography'

const markdownStylesClassName = css(markdownStyles)

const RenderMarkdown = ({ children, className = '', ...rest }) => (
  <ReactMarkdown
    renderers={{
      link: ExternalLink,
      shortcode: ({ identifier, attributes }) => {
        if (
          (identifier === 'youtube' || identifier === 'vimeo') &&
          attributes.id
        ) {
          return <EmbedVideo type={identifier} id={attributes.id} />
        } else if (identifier === 'video' && attributes.src) {
          return <EmbedVideo type={identifier} src={attributes.src} />
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
