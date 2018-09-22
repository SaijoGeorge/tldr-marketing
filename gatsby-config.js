module.exports = {
  pathPrefix: '/tldr-marketing',
  siteMetadata: {
    title: 'tldr-marketing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tldr-marketing',
        description:
          "Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news.",
        start_url: '/?addToHome=1',
        background_color: '#EFF5F8',
        theme_color: '#EFF5F8',
        display: 'minimal-ui',
        // "icon": "src/images/favicon.png"
      },
    },
    // 'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: "GTM-WHPRDXX",

    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // Specify optional GTM environment details.
    //     gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
    //     gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
    //   },
    // },
  ],
}
