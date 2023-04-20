module.exports = {
  siteName: 'Greenstein Designagentur',
  siteUrl: 'https://greenstein.design',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://admin.greenstein.design', // erforderlich
        apiBase: 'wp-json',
        typeName: 'WordPress', // hinzufügen
        perPage: 100,
        concurrent: 10,
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: '2023-03-07',
          },
        }
      }
    }
  ]
}
