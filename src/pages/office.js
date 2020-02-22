import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Office = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi invoice faktur pajak penjualan dan accounting akuntansi" />
      <Bio />
      <h1><strong><a title="daftar aplikasi bisnis dan office kantor" href="/office">OFFICE</a></strong></h1>
<p>Special untuk kebutuhan office dan bisnis dalam kebutuhan mencatat inventori stok , penerbitan invoice faktur hingga akuntansi..</p>
<div class="row text-center">
<div class="col-12 col-md-4 p-3 p-md-3">
  <h3><strong><a href="/office" title="invoice online modern terbaru">Next</a></strong></h3>
<img class="img-fluid" alt="format invoice terbaru" src="/img/invoicepenjualan.png"/> 
<p class="text-left">Aplikasi invoice online modern support dengan mobile pos system yang memungkinkan akses via smartphone dengan online metode dilengkapi dengan penerbitan invoice faktur penjualan hingga faktur pajak penjualan dan pencatatan tender project sangat lengkap dan modern system.
<br/><small>OS : Android , Iphone , Windows
  <br/>
  System : Offline / Online Web Based
</small>
</p>
<Link class="button btn-block" to="/next">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/office" title="invoice dan inventori system">Simple</a></strong></h3>
<img class="img-fluid" alt="inventori invoice online" src="/img/software-stok-inventory-dan-invoice-simple-management.png"/>
<p class="text-left">Simple system untuk inventori dan invocie menggunakan online system memudahkan dalam akses via berbagai device , memiliki dual based inventori dan invoice semakin memudahkan divisi untuk fokus pada tugas nya masing masing.
<br/><small>OS : Android , Iphone , Windows
  <br/>
  System : Offline / Online Web Based
</small>
</p>
<Link class="button btn-block" to="/inventori">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/office" title="Accounting akuntansi">Acc</a></strong></h3>
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/acounting.png"/> 
<p class="text-left">Fokus untuk pembukuan yang lebih lengkap digital accounting software accounting program akuntansi terlengkap dengan fitur master based, pembelian, penjualan ,pencatatan neraca laba rugi general ledger hingga proses produksi manufakturing.
<br/><small>OS : Android , Iphone , Windows
  <br/>
  System : Offline / Online Web Based
</small>
</p>
<Link class="button btn-block" to="/accounting">More info</Link>
</div>
<div class="col-12 col-md-12"><br/><br/><Link class="float-left" to="/toko">&larr; Retail</Link> <Link class="float-right" to="/restoran">Resto &rarr;</Link></div>
<div class="col-12 col-md-12 p-3 p-md-5 text-center bg-light">
  <p><strong>Mobile technology</strong></p>
<p>All in one dengan online mode support berbagai os <a href="https://www.android.com/" target="blank" title="android">android</a> <a href="https://www.apple.com/id/iphone/" target="blank" title="android">iphone</a> windows maupun kebutuhan untuk offline mode tanpa biaya bulanan untuk kebutuhan mesin kasir mu.</p>
<Link class="button" to="/applikasi">Aplikasi</Link> <Link class="button button-outline" to="/pos">Hardware</Link>
</div>
</div>
    </Layout>
  )
}

export default Office
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