import React from "react"
import { graphql } from 'gatsby'
import "normalize.css"
import "../styles/styles.scss"
import Layout from "../components/layout/Layout"

export default function Home() {
  return (
    <Layout>
      <h3>Home page stuff</h3>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
