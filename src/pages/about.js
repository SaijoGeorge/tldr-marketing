import React from 'react'

import Layout from '../components/Layout'
import Author from '../components/Author'
import Navbar from '../components/Navbar'
import TextContainer from '../components/TextContainer'
import RenderMarkdown from '../components/RenderMarkdown'
import { ContentLayout } from '../styles/layouts'
import { NavbarText, NavbarLink } from '../styles/typography'

import { em, rem } from '../styles/tools'

const NavbarH1 = NavbarText.withComponent('h1')

const content = `
## tl;dr Marketing - SEO Newsletter

Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing.

My name is Saijo George, I am an [SEO consultant from Melbourne](https://saijogeorge.com/) who spends a lot of time [building side projects](https://saijogeorge.com/projects.html) and reading up on what is changing up in the industry, I started giving talk on it at the [Melbourne SEO Meetups](https://www.meetup.com/Melbourne-SEO/) and decided to start a newsletter with that content and that is how tl;dr Marketing was born.

I work on a bunch of side projects, here are a few that you might enjoy. There is this one project which aims to collect all the [free images, video and other resources](https://allthefreestock.com/) you can use in your commercial or personal projects. Another one which gives you [UI inspirations](https://codemyui.com/) with code snippets so you can easily add them to you web projects. I also maintain a list of SEO tools that I try and keep updated with the top [SEO tools](https://saijogeorge.com/best-marketing-tools/) that I come across.

![Some test image](https://images.unsplash.com/photo-1536679887050-4bdea5bf41c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2382881d2f2d7346c32da6fca7cf268&auto=format&fit=crop&w=2667&q=80)

I work on a bunch of side projects, here are a few that you might enjoy. There is this one project which aims to collect all the [free images, video and other resources](https://allthefreestock.com/) you can use in your commercial or personal projects. Another one which gives you [UI inspirations](https://codemyui.com/) with code snippets so you can easily add them to you web projects. I also maintain a list of SEO tools that I try and keep updated with the top [SEO tools](https://saijogeorge.com/best-marketing-tools/) that I come across.

![Some test image](https://images.unsplash.com/photo-1536641480196-ed8d5b3ed21f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e32ed3893fed0e0e5a1c5ef59861d3a&auto=format&fit=crop&w=2100&q=80)

[[ youtube id="Kch8n4tcOZQ" ]]

[[ vimeo id="286945944" ]]
`

const AboutPage = () => (
  <Layout>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <NavbarH1 size="md">About</NavbarH1>
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

export default AboutPage
