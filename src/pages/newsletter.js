import React from 'react'

import Layout from '../components/Layout'
import Author from '../components/Author'
import Navbar from '../components/Navbar'
import NewsletterForm from '../components/NewsletterForm'
import GoBackLink from '../components/GoBackLink'
import { ContentLayout } from '../styles/layouts'
import { NavbarText } from '../styles/typography'

const NavbarH1 = NavbarText.withComponent('h1')

const NewsletterPage = () => (
  <Layout>
    <Navbar style={{ gridArea: 'InnerLayoutNavbar' }}>
      <NavbarH1 size="md">Newsletter</NavbarH1>
      <div css={{ marginLeft: 'auto' }}>
        <GoBackLink />
      </div>
    </Navbar>
    <main style={{ gridArea: 'InnerLayoutContent' }}>
      <Author />
      <ContentLayout>
        <NewsletterForm style={{ gridArea: 'ContentLayoutContent' }} />
      </ContentLayout>
    </main>
  </Layout>
)

export default NewsletterPage
