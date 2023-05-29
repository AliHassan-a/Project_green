module.exports = {
  siteName: 'Greenstein Designagentur',
  siteUrl: 'https://greenstein.design',
  chainWebpack: (config, { isProd, isClient }) => {
    if (isProd && isClient) {
      config.optimization.splitChunks({
        chunks: "initial",
        maxInitialRequests: Infinity,
        cacheGroups: {
          vueVendor: {
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router)[\\/]/,
            name: "vue-vendors",
          },
          gridsome: {
            test: /[\\/]node_modules[\\/](gridsome|vue-meta)[\\/]/,
            name: "gridsome-vendors",
          },
          polyfill: {
            test: /[\\/]node_modules[\\/]core-js[\\/]/,
            name: "core-js",
          },
        },
      });
    }
  },
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
            lastmod: new Date().toISOString().slice(0, 10), // Aktuelles Datum des Builds
          },
        }
      }
    }
  ],
 
};