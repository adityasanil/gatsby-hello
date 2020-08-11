import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"

function getPosts(posts) {
  return posts.allMarkdownRemark.edges.map(edge => {
    return (
      <>
        <li className={blogStyles.post}>
          <Link to={`/blog/${edge.node.fields.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </Link>
        </li>
      </>
    )
  })
}

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog page</h1>
      <ol className={blogStyles.posts}>{getPosts(posts)}</ol>
    </Layout>
  )
}

export default BlogPage
