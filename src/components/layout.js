import React from "react"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

import Footer from "../components/footer"
import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
