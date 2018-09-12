import React from 'react'

import Layout from '../components/Layout'
import Author from '../components/Author'
import Navbar from '../components/Navbar'
import RenderMarkdown from '../components/RenderMarkdown'
import TextContainer from '../components/TextContainer'
import { ContentLayout } from '../styles/layouts'
import { NavbarText, NavbarLink } from '../styles/typography'

import { em, rem } from '../styles/tools'

const NavbarH1 = NavbarText.withComponent('h1')

const content = `
## Sponsored text

This content is also written in markdown.

Link below is internal link addded with special shortcode:

[[ link text="Internal link to /posts/post-05" to="/posts/post-05" ]]

For now we have followingn shortoces:
\`\`\`
[ link text="About page" to="/about" ]
[ youtube id="..." ]
[ video id="..." ]
\`\`\`
`

const SponsoredPage = () => (
  <Layout>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <NavbarH1 size="md">Sponsored</NavbarH1>
      <div css={{ marginLeft: 'auto' }}>
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
      </div>
    </Navbar>
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <Author />
      <ContentLayout>
        <TextContainer style={{ gridArea: 'ContentLayoutContent' }}>
          <RenderMarkdown css={{ fontSize: rem(18) }}>{content}</RenderMarkdown>
        </TextContainer>
      </ContentLayout>
    </main>
  </Layout>
)

export default SponsoredPage
