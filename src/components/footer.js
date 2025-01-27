import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          linkedIn
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by{" "}
        <a href={data.site.siteMetadata.linkedIn} target="blank">
          {data.site.siteMetadata.author}
        </a>
        , © 2020
      </p>
    </footer>
  )
}

export default Footer
