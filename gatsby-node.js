const path = require("path")

// Markdown
// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")

  // const res = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const res = await graphql(`
    query {
      allContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // Markdown
  // res.data.allMarkdownRemark.edges.forEach(edge => {
  //   createPage({
  //     component: blogTemplate,
  //     path: `/blog/${edge.node.fields.slug}`,
  //     context: {
  //       slug: edge.node.fields.slug,
  //     },
  //   })
  // })
}
