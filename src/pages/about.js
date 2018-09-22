import React from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import TextContainer from '../components/TextContainer'
import RenderMarkdown from '../components/RenderMarkdown'
import GoBackLink from '../components/GoBackLink'
import { ContentLayout } from '../styles/layouts'
import {
  NavbarText,
  MediumHeading,
  WideExternalLink,
} from '../styles/typography'

import { media } from '../styles/theme'
import { rem } from '../styles/tools'
import avatar from '../images/saijo-george.png'

const MediumHeading4 = MediumHeading.withComponent('h4')
const NavbarH1 = NavbarText.withComponent('h1')

const Author = props => (
  <div
    css={{
      [media.max._sm]: { display: 'none' },
      width: 'calc(100% - 60px)',
      position: 'sticky',
      top: rem(200),
      background: 'rgba(239, 245, 248, 0.9)',
      boxShadow: '0 0 30px 30px rgba(239, 245, 248, 0.9)',
    }}
    {...props}
  >
    <img
      src={avatar}
      alt="Saijo George"
      css={{
        width: rem(90),
        height: rem(90),
        borderRadius: '50%',
        mixBlendMode: 'luminosity',
      }}
    />
    <MediumHeading4
      css={{
        marginTop: rem(25),
        marginBottom: rem(22),
        fontSize: rem(22),
        lineHeight: 1.3,
      }}
    >
      Curated by
      <br />
      Saijo George
    </MediumHeading4>
    <WideExternalLink
      href="http://linkedin.com/in/saijogeorge"
      css={{ display: 'block', padding: `${rem(10)} 0` }}
    >
      LINKEDIN
    </WideExternalLink>
    <WideExternalLink
      href="http://facebook.com/saijogeorge"
      css={{ display: 'block', padding: `${rem(10)} 0` }}
    >
      FACEBOOK
    </WideExternalLink>
    <WideExternalLink
      href="http://twitter.com/saijogeorge"
      css={{ display: 'block', padding: `${rem(10)} 0` }}
    >
      TWITTER
    </WideExternalLink>
    <WideExternalLink
      href="https://saijogeorge.com/"
      css={{ display: 'block', padding: `${rem(10)} 0` }}
    >
      WEBSITE
    </WideExternalLink>
  </div>
)

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

[[ video src="http://asista.pl/f/ati.mp4" ]]
`

const AboutPage = () => (
  <Layout>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <NavbarH1 size="md">About</NavbarH1>
      <div css={{ marginLeft: 'auto' }}>
        <GoBackLink />
      </div>
    </Navbar>
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <ContentLayout>
        <Author style={{ gridArea: 'ContentLayoutSidebar' }} />
        <TextContainer style={{ gridArea: 'ContentLayoutContent' }}>
          <RenderMarkdown css={{ fontSize: rem(18) }}>{content}</RenderMarkdown>
        </TextContainer>
      </ContentLayout>
    </main>
  </Layout>
)

export default AboutPage
