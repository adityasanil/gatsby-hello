import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact page</h1>
      <p>
        You can contact me at{" "}
        <a href="https://www.linkedin.com/in/adityasanil/" target="blank">
          @adityasanil
        </a>{" "}
        on Linkedin
      </p>
    </Layout>
  )
}

export default ContactPage
