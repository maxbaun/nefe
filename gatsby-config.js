/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '#root': path.resolve(__dirname, 'src')
        },
        extensions: []
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components'
  ]
};
