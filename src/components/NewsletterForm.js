import React from 'react'
import styled from 'react-emotion'

import { PostTitle, Paragraph, WideLabel } from '../styles/typography'

import { media, colors, space } from '../styles/theme'
import { em, rem } from '../styles/tools'

const Envelope = props => (
  <svg width="372" height="202" viewBox="0 0 372 202" fill="none" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M76.88 37.78c0-8.74 7.67-15.95 17.28-15.95h182.86c9.63 0 17.29 7.2 17.3 15.94l-.14 7.87-.5.26a1084.78 1084.78 0 0 1-13.46 6.88c-8.8 4.44-20.74 10.37-33.26 16.3a676.68 676.68 0 0 1-36.73 16.28 192.77 192.77 0 0 1-14.85 5.35c-4.27 1.3-7.61 2-9.79 2-2.06 0-5.32-.72-9.53-2.04-4.18-1.3-9.2-3.19-14.75-5.45a706 706 0 0 1-36.83-16.6 1586.03 1586.03 0 0 1-47.1-23.63l-.5-.26v-6.95zm218.75 9.36l-.03-.06c.03.06.03.06.02.07l-.06.03-.2.1-.76.4a1015.76 1015.76 0 0 1-13.48 6.88 1501.76 1501.76 0 0 1-33.3 16.32c-12.54 5.94-25.67 11.88-36.85 16.34a194.4 194.4 0 0 1-15.01 5.4c-4.29 1.3-7.87 2.09-10.37 2.09-2.4 0-5.9-.8-10.13-2.13a197.74 197.74 0 0 1-14.91-5.5 707.95 707.95 0 0 1-36.93-16.66 1586.08 1586.08 0 0 1-47.16-23.66l-.78-.4-.2-.1-.05-.03-.01-.01.46-.88-.46.88-.54-.28v-8.16c0-9.98 8.7-17.95 19.28-17.95h182.86c10.6 0 19.3 7.97 19.3 17.95v.02l-.15 8.47-.01.6-.53.27zm.54 24.55v-1.62l-1.45.72.05.1a.48.48 0 0 0-.06-.1v.01l-.06.03-.19.1-.75.37a1073.84 1073.84 0 0 1-13.35 6.57 1441.3 1441.3 0 0 1-33.06 15.57A659.91 659.91 0 0 1 210.6 109a193.98 193.98 0 0 1-14.96 5.1c-4.32 1.24-7.75 1.92-10.04 1.92-2.08 0-5.34-.67-9.55-1.91-4.18-1.23-9.2-2.99-14.74-5.1a727.47 727.47 0 0 1-36.78-15.57A1619.09 1619.09 0 0 1 77.51 71.3l-.48-.23v-.38h-1c-.39.3-.54.67-.58 1h-.42l-.15 101.73c0 9.98 8.71 17.95 19.28 17.95h182.86c10.6 0 19.3-7.97 19.3-17.95l-.15-101.73zm-4.46 2.84l2.46-1.22.14 100.1c0 8.75-7.66 15.96-17.29 15.96H94.16c-9.6 0-17.28-7.21-17.28-15.95l.15-100.12a1356.67 1356.67 0 0 0 13.18 6.37 1626 1626 0 0 0 33.5 15.6 731.34 731.34 0 0 0 36.88 15.6 206.29 206.29 0 0 0 14.9 5.16c4.22 1.24 7.72 1.99 10.1 1.99 2.6 0 6.25-.75 10.6-1.99 4.37-1.25 9.52-3.03 15.13-5.16a662.47 662.47 0 0 0 36.8-15.6 1440.7 1440.7 0 0 0 43.59-20.74z"
      fill="#EFF5F8"
    />
  </svg>
)

const StyledNewsletterForm = styled.div({
  [media._sm]: {
    boxShadow: `0 5px 25px ${colors.shadow.blue.light}`,
    backgroundColor: 'white',
    borderRadius: '8px',
  },
})

const Input = styled.input({
  padding: em(12),
  fontWeight: 700,
  fontSize: rem(16),
  borderRadius: 5,
  border: `solid 2px ${colors.border.blue.normal}`,
  backgroundColor: 'transparent',
  '::placeholder': {
    color: colors.text.blue.lightest,
  },
})

const Button = styled.button({
  alignSelf: 'end',
  gridArea: '2 / 1 / 3 / 3',
  [media._sm]: {
    gridArea: '1 / 3 / 2 / 4',
  },
  padding: em(18),
  fontWeight: 700,
  fontSize: rem(14),
  color: 'white',
  borderRadius: 5,
  backgroundColor: colors.bg.blue.medium,
})

const NewsletterForm = ({ ...rest }) => (
  <StyledNewsletterForm {...rest}>
    <div
      css={{
        position: 'relative',
        zIndex: 0,
        padding: space.md,
        [media.mobileLg]: {
          padding: rem(24),
        },
        [media._sm]: {
          padding: rem(32),
        },
      }}
    >
      <div
        css={{ [media.max._sm]: { display: 'none' }, marginBottom: rem(30) }}
      >
        <PostTitle>Sign up for our newsletter</PostTitle>
        <Paragraph css={{ marginTop: rem(5) }}>
          Get daily dose of marketing news in quick TL;DR style.
        </Paragraph>
      </div>
      <form
        action=""
        css={{
          display: 'grid',
          gridGap: rem(16),
          gridTemplate: `
            auto
            auto
            / minmax(50px, 1fr) minmax(50px, 2fr)
          `,
          [media._sm]: {
            gridTemplate: `
              auto
              / minmax(50px, 1fr) minmax(50px, 2fr) minmax(50px, 1fr)
            `,
          },
        }}
      >
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <WideLabel size="md" htmlFor="name">
            Name
          </WideLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John"
            css={{}}
          />
        </div>
        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <WideLabel size="md" htmlFor="email">
            Email
          </WideLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john-doe@gmail.com"
            css={{}}
          />
        </div>
        <Button>
          <span css={{ [media.min._sm]: { display: 'none' } }}>
            Sign up for our newsletter
          </span>
          <span css={{ [media.max._sm]: { display: 'none' } }}>Sign up</span>
        </Button>
      </form>
      <div
        css={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          overflow: 'hidden',
        }}
      >
        <Envelope
          css={{
            width: '40%',
            height: 'auto',
            position: 'absolute',
            top: '-11%',
            right: '-12%',
            transform: 'rotate(-45deg)',
          }}
        />
      </div>
    </div>
  </StyledNewsletterForm>
)

export default NewsletterForm
