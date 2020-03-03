module.exports = {
  siteMetadata: {
    title: 'Reddit-Feed v1',
    author: 'Bryce DeWitt',
    description: 'A minimal Reddit query.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["AUTH0_DOMAIN", "AUTH0_CLIENTID", "AUTH0_CALLBACK"]
      },
    },
    'gatsby-plugin-sass',
  ],
}
