import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact App store" />
      <Bio />
      <h1><strong>CONTACT US</strong></h1>
      <p>Masukan pesan dan pertanyaan anda pada form dibawah ini.</p><hr/>
      <form action="https://airform.io/hockeycorpmarketing@gmail.com" method="post">
  <input type="text" name="name" placeholder="Masukan Nama dan Phone"/>
  <textarea name="message" placeholder="Masukan pesan dan pertanyaan"></textarea>
  <button class="btn-block">Kirim Pesan</button>
</form>

    </Layout>
  )
}

export default Contact
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`