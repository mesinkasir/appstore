import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div class="container">
      <div class="col-12 col-md-12 text-center">
      <h1>Wrong Way !!</h1>
      <h3 class="display-4">404</h3>
      <p>Mohon maaf post yang anda cari tidak terdaftar pada website kami.<br/>Silahkan lakukan pencarian lain.</p>
   <Link class="button" to="/">Back Home</Link>
   </div></div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
