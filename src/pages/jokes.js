import React from "react"

import Layout from "../components/layout"

const Jokes = () => {
  return (
    <Layout>
      <h1>CAUTION! Read at your own risk.</h1>
      <div>
        <ul>
          <li>
            <p>I have a joke on Golang, but it has no class.</p>
          </li>
          <li>
            <p>I have a joke on async, but you will have to wait.</p>
          </li>
          <li>
            <p>I have a joke on recursion, I have a joke on recursion.</p>
          </li>
          <li>
            <p>I have a joke on my website, but it is not responsive.</p>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Jokes
