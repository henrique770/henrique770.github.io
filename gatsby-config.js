module.exports = {
  siteMetadata: {
    title: 'Henrique Araújo',
    author: 'araujhenr',
    siteUrl: 'https://henrique770.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
