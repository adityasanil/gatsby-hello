import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../components/head"
import Layout from "../components/layout"

// Markdown
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// const Blog = ({ data }) => {
//   return (
//     <Layout>
//       <h1>{data.markdownRemark.frontmatter.title}</h1>
//       <p>{data.markdownRemark.frontmatter.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
//     </Layout>
//   )
// }

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog
