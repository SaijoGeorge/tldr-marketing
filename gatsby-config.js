module.exports = {
  siteMetadata: {
    title: '𝕥𝕝;𝕕𝕣 𝕄𝕒𝕣𝕜𝕖𝕥𝕚𝕟𝕘',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '𝕥𝕝;𝕕𝕣 𝕄𝕒𝕣𝕜𝕖𝕥𝕚𝕟𝕘',
        description:
          "Don't have the time to keep on top of all the changes influencing digital marketing? Get an 📧 with links to stories that impact Organic, Paid & Social Media Marketing news.",
        start_url: '/?addToHome=1',
        background_color: '#EFF5F8',
        theme_color: '#EFF5F8',
        display: 'minimal-ui',
        // "icons": [
        //   {
        //     "src": "src/images/favicon.png",
        //     "sizes": "512x512",
        //     "type": "image/png"
        //   }
        // ],
      },
    },
    'gatsby-plugin-offline',
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
