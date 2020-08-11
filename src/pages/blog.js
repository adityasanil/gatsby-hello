import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

function getPosts(posts) {
  return posts.allContentfulBlogPost.edges.map(edge => {
    return (
      <>
        <li className={blogStyles.post}>
          <Link to={`/blog/${edge.node.slug}`}>
            <h2>{edge.node.title}</h2>
            <p>{edge.node.publishedDate}</p>
          </Link>
        </li>
      </>
    )
  })
}

// Markdown
// function getPosts(posts) {
//   return posts.allMarkdownRemark.edges.map(edge => {
//     return (
//       <>
//         <li className={blogStyles.post}>
//           <Link to={`/blog/${edge.node.fields.slug}`}>
//             <h2>{edge.node.frontmatter.title}</h2>
//             <p>{edge.node.frontmatter.date}</p>
//           </Link>
//         </li>
//       </>
//     )
//   })
// }

const BlogPage = () => {
  // Markdown
  // const posts = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             title
  //             date
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />

      <h1>Blog page</h1>
      <ol className={blogStyles.posts}>{getPosts(posts)}</ol>
    </Layout>
  )
}

export default BlogPage
