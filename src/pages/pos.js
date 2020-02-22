import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Pos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Point of sale paket mesin kasir murah set lengkap siap pakai" />
      <Bio />
      <h1><strong><a href="/pos" title="point of sale">POINT OF SALE</a></strong></h1>
<p>Paket mesin kasir lengkap dan hardware kasir siap digunakan free instalasi setting</p>
<div class="row text-center">
<div class="col-12 col-md-5 p-3 p-md-5 bg-light shadow">
<h3><strong><a href="/pos" title="mesin kasir portable murah">Portable</a></strong></h3>
<p class="text-left"> Mesin kasir portable persembahan by hewllet packard modern simple mewah elegan dengan harga yang murah untuk menunjang bidang usaha dan bisnis dukungan penuh aplikasi dan hardware peralatan kasir terintegrasi.</p>
<p class="text-left">Khusus kebutuhan office dan admin system dengan inventori dan invoice technology include dengan printer office untuk cetak faktur jual hingga report dalam kebutuhan nya.</p>
<Link class="button btn-block" to="/portable">More info</Link>
</div>
<div class="col-12 col-md-7 p-3 p-md-3 shadow">
<img class="img-fluid" alt="mesin kasir" src="/img/portable.png"/> <img class="img-fluid" alt="mesin kasir" src="/img/office.jpg"/> 
</div>
<div class="col-12 col-12 p-3 p-md-5"></div>
<div class="col-12 col-md-12 p-3 p-md-3 shadow">
<img class="img-fluid" alt="mesin kasir" src="/img/touchscreenpos.png"/> 
</div>
<div class="col-12 col-md-12 p-3 p-md-5 bg-light shadow">
<h3><strong><a href="/pos" title="mesin kasir all in one touchscreen">Touchscreen</a></strong></h3>
<p class="text-left">Fashionable slim design dan modern style sensitif touchscreen persembahan by ASUS technology semakin sempurna dengan multiport integrasi dengan hardware,era mesin kasir modern up to date siap menemani berbagai bidang usaha dan bisnis hingga kebutuhan office mu.</p>
<Link class="button btn-block" to="/touchscreen">More info</Link>
</div><div class="col-12 col-12 p-3 p-md-5"></div>
</div>
    </Layout>
  )
}

export default Pos
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