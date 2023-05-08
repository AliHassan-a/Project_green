// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
  })
  api.createPages(async ({graphql, createPage}) => {
    /* BLOG */
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
          featuredMedia: {
            sourceUrl: node.featuredMedia.sourceUrl.replace("admin.", ""),
            title: node.featuredMedia.title,
            altText: node.featuredMedia.altText,
          },
        }
      })
    })
  })
  api.createPages(async ({graphql, createPage}) => {
    /* FAQ */
    const { data } = await graphql(`{
    allWordPressFaq{
      edges{
        node{
          slug,
          title,
          content,
          date,
          acf{
            metaTitle,
            metaDescription
          }
        }
      }
    }}`)
    data.allWordPressFaq.edges.forEach(({node}) => {
      createPage({
        path: `/faq/${node.slug}`,
        component: './src/templates/SingleFaq.vue',
        context: {
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
          acf: node.acf,
        }
      })
    })
  })

  api.createPages(async ({graphql, createPage}) => {
    /* JOBS */
    const { data } = await graphql(`{
    allWordPressJobs{
      edges{
        node{
          slug,
          title,
          content,
          date,
          acf{
            metaTitle,
            metaDescription
          }
          featuredMedia{
            sourceUrl,
            title,
            altText
          }
        }
      }
    }}`)
    data.allWordPressJobs.edges.forEach(({node}) => {
      createPage({
        path: `/jobs/${node.slug}`,
        component: './src/templates/SingleJob.vue',
        context: {
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
          acf: node.acf,
          featuredMedia: {
            sourceUrl: node.featuredMedia.sourceUrl.replace("admin.", ""),
            title: node.featuredMedia.title,
            altText: node.featuredMedia.altText,
          },
        }
      })
    })
  })
  api.createPages(async ({graphql, createPage}) => {
    const { data } = await graphql(`{
    allWordPressProjekte{
      edges{
        node{
          slug,
          title,
          acf{
            metaTitle,
            metaDescription,            
            titel,
            zeitraum,
            leistungen,
            technologien,
            mockup,
            step1Image,
            step1Text,
            step2Image,
            step2Text,
            step3Image,
            step3Text,
            step4Bild2,
            step4Bild3,
            step4Bild4,
            step4Bild5,
          }
        }
      }
    }}`)
    data.allWordPressProjekte.edges.forEach(({node}) => {
      createPage({
        path: `/projekte/${node.slug}`,
        component: './src/templates/SingleProject.vue',
        context: {
          slug: node.slug,
          title: node.title,
          acf: {
            metaTitle: node.acf.metaTitle,
            metaDescription: node.acf.metaDescription,
            titel: node.acf.titel,
            zeitraum: node.acf.zeitraum,
            leistungen: node.acf.leistungen,
            technologien: node.acf.technologien,
            mockup: node.acf.mockup.replace("admin.", ""),
            step1Image: node.acf.step1Image.replace("admin.", ""),
            step1Text: node.acf.step1Text,
            step2Image: node.acf.step2Image.replace("admin.", ""),
            step2Text: node.acf.step2Text,
            step3Image: node.acf.step3Image.replace("admin.", ""),
            step3Text: node.acf.step3Text,
            step4Bild2: node.acf.step4Bild2.replace("admin.", ""),
            step4Bild3: node.acf.step4Bild3.replace("admin.", ""),
            step4Bild4: node.acf.step4Bild4.replace("admin.", ""),
            step4Bild5: node.acf.step4Bild5.replace("admin.", ""),
          }
        }
      })
    })
  })
  api.createPages(async ({graphql, createPage}) => {
    /* Landingpages */
    const { data } = await graphql(`{
    allWordPressLandingpages{
      edges{
        node{
          slug,
          title,
          content,
          date,
          acf{
            title,
            subtitle,
            bilderSlider{
              bildUrl
            },
            headlineFliestext,
            fliestext,
            hoverSection{
              title,
              text,
            },
            faq{
              title,
              text,
            },
            metaTitle,
            metaDescription
          }
        }
      }
    }}`)
    data.allWordPressLandingpages.edges.forEach(({node}) => {
      createPage({
        path: `/${node.slug}`,
        component: './src/templates/LandingpageType1.vue',
        context: {
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
          acf: {
            title: node.acf.title,
            subtitle: node.acf.subtitle,
            bilderSlider: {
                bildUrl: node.acf.bilderSlider.bildUrl
            },
            headlineFliestext: node.acf.headlineFliestext,
            fliestext: node.acf.fliestext,
            hoverSection: {
              title: node.acf.hoverSection.title,
              text: node.acf.hoverSection.text,
            },
            faq: {
              title: node.acf.faq.title,
              text: node.acf.faq.text,
            },
            metaTitle: node.acf.metaTitle,
            metaDescription: node.acf.metaDescription,
          },
        }
      })
    })
  })
}
