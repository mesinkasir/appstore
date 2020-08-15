import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi Kasir Toko Resto" />
      <Bio />
      <div class="row">
      <div class="col-12 col-md-2"></div>
      <div class="col-12 col-md-2">
      <img alt="aplikasi kasir online" class="img-fluid text-center" src="/img/mobilepos.jpg" width="200"/>
</div>
    <div class="col-12 col-md-7 p-3 p-md-5">
      <h3>Digital Revolutions</h3>
<p>Era kebebasan technology dengan beragam aplikasi untuk digunakan menunjang usaha, sebagai pengganti <a title="mesin kasir" href="/pos">mesin kasir</a> yang lebih murah dan sempurna, variant <a href="/applikasi" title="aplikasi kasir">aplikasi kasir</a>,<a href="/toko" title="aplikasi toko">aplikasi toko</a>,<a title="aplikasi restoran" href="/restoran">aplikasi restoran</a> hingga invoice dan inventori online tersedia dalam kebutuhan menunjang usaha mu.</p>
 </div>
 <div class="col-12 col-md-1"></div>
     <div class="col-12 col-md-6 p-3 p-md-3">
<h3><a title="aplikasi" href="/">App Store</a></h3>
<img class="img-fluid" alt="aplikasi kasir toko" src="/img/aplikasi.jpg"/>
<p>Offline desktop mode dalam kebutuhan stabilitas operasional dan free selamanya pada device hardware yang sama , atau via online mode dengan biaya per tahun yang sangat murah,semua tersedia untuk mu.</p>
<Link class="button float-right" to="/applikasi">App Info >></Link>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
  <h3><a title="mesin kasir point of sale" href="/">Point Of Sale</a></h3>
<img class="img-fluid" alt="mesin kasir" src="/img/mesinkasir.png"/>
<p>Paket point of sale set lengkap mesin kasir terbaru modern siap digunakan dalam menunjang berbagai usaha dan bisnis free instalasi setting siap pakai menjadi sempurna,semua lengkap disini.</p>
<Link class="button float-right" to="/pos">POS Info >></Link>
</div>
</div>
<div class="row text-center">
<div class="col-12 col-md-4 p-3 p-md-3">
<p>Dukungan dan support</p>
  <a href="https://www.apachefriends.org/" target="blank"><img alt="web server" class="img-fluid" width="120" src="/img/xampp.jpg"/></a>
  <a href="https://www.java.com/" target="blank"><img alt="java" class="img-fluid" width="80" src="/img/java.png"/></a>
  <a href="https://www.android.com" target="blank"><img alt="android iphone windows" class="img-fluid" width="120" src="/img/android.jpg"/></a>
  <img alt="hewllet packard" class="img-fluid" width="80" src="/img/HP-logo.png"/>
  <img alt="Asus" class="img-fluid" width="120" src="/img/Asus-Logo.png"/>
  </div>
<div class="col-12 col-md-8 p-3 p-md-3">
  <p>We Hapy Client</p>
<img alt="Pelanggan" class="img-fluid" src="/img/Client.jpg"/>
</div>
</div>
    </Layout>
  )
}

export default Index

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
