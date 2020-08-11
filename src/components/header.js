import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerSyles from "./header.module.scss"

const Header = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <header className={headerSyles.header}>
      <h1>
        <Link className={headerSyles.title} to="/">
          {author.site.siteMetadata.author}
        </Link>
      </h1>
      <nav>
        <ul className={headerSyles.navList}>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={headerSyles.navItem}
              activeClassName={headerSyles.activeNavItem}
              to="/jokes"
            >
              Jokes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
