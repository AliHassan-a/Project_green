// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
  })

  api.createPages(async ({graphql, createPage}) => {
    const {data} = await graphql(`{
    allWordPressPost{
      edges{
        node{
          slug,
          title,
          content,
          date,
          acf{
            metaTitle,
            metaDescription
          },
          featuredMedia{
            sourceUrl,
            title,
            altText
          }
        }
      }
    }}`)
    data.allWordPressPost.edges.forEach(({node}) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: './src/templates/SingleBlog.vue',
        context: {
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
          acf: node.acf,
          featuredMedia: node.featuredMedia,
        }
      })
    })
  })
}
