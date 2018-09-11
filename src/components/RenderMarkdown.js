import React from 'react'
import ReactMarkdown from 'react-markdown'
import { css } from 'emotion'

import ExternalLink from './ExternalLink'

import { markdownStyles } from '../styles/typography'

const markdownStylesClassName = css(markdownStyles)

const RenderMarkdown = ({ children, className, ...rest }) => (
  <ReactMarkdown
    renderers={{
      link: ExternalLink,
    }}
    source={children}
    className={`${markdownStylesClassName} ${className}`}
    {...rest}
  />
)

export default RenderMarkdown
