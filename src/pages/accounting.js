import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Accounting = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi software program accounting akuntansi" />
      <Bio />
      <h1><strong><a title="aplikasi accounting software program akuntansi" href="/accounting">AKUNTANSI</a></strong></h1>
<p>Fokus untuk pembukuan yang lebih lengkap digital accounting software accounting program akuntansi terlengkap dengan fitur master based, pembelian, penjualan ,pencatatan neraca laba rugi general ledger hingga proses produksi manufakturing.</p>
<div class="row text-center">
<div class="col-12 col-md-7 p-0 p-md-0">
<img alt="aplikasi accounting software program akuntansi" class="img-fluid" src="/img/accounting/accounting 1.jpg"/>
    </div>
    <div class="col-12 col-md-5 p-3 p-md-3 text-left">
    <h3><strong><a href="/accounting" title="akuntansi online">Accounting</a></strong></h3>
<p>Solusi pencatatan pembukuan untuk perusahaan dan pabrikan dengan kelengkapan fitur dan kemudahan dalam operasionalnya , plus kebutuhan offline mode maupun online system via android iphone secara langsung.<br/><small>This is digital accounting</small></p>
    </div>
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/accounting/accounting 2.jpg"/> 
<p class="text-left">IPP Management, invoice system untuk mencetak faktur penjualan , Project untuk mencatat project tender , Production untuk proses produksi manufakturing secara detail.</p>
</div>
<div class="col-12 col-md-5 p-0 p-md-0">
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/accounting/accounting 3.jpg"/></div>
<div class="col-12 col-md-7 p-3 p-md-5">
<p class="text-left">Laporan backoffice admin dashboard yang lengkap memudahkan dalam setiap cek pembukuan dan monitoring perusahaan secara rinci dengan hadirnya laporan keuangan neraca laba rugi hingga general ledger dalam kemudahan akuntansi dan accounting.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="invoice accounting terbaru" src="/img/accounting/accounting 5.jpg"/> 
<p class="text-left">Terlengkap dengan fitur lengkap master based,  transaksi pembelian , penjualan , proses produksi , laporan laporan detail kompleks untuk usaha dan bisnis. </p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="inventori invoice barcode online" src="/img/accounting/ACOUNTING MOBILE DIGITAL.jpg"/>
<p class="text-left">Kemudahan akan inventori stok management stok yang support dengan barcode kode hingga produk untuk proses produksi, rakitan , dan komponen tersedia secara rinci. </p>
</div>
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/accounting/accounting 4.jpg"/>
<div class="col-12 col-md-12 p-3 p-md-5">
<p>Dengan server host memudahkan mu untuk instalasi via offline desktop dengan local host maupun untuk kebutuhan akses secara online dengan web based connection memudahkan dalam setiap kebutuhan perusahaan .<br/>
Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , <a href="https://www.php.net/" target="blank">PHP</a> dan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
<a class="button" href="https://mesinkasir.github.io/e-catalog/digital%20Accounting.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYPFF_0_BXbsei6UIcp8cMXh" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>
<br/><br/><Link class="float-left" to="/next">&larr; Next Invoice</Link> <Link class="float-right" to="/inventori">Simple Management &rarr;</Link>
</div>
<div class="col-12 col-md-12 p-3 p-md-5 text-center bg-light">
  <p><strong>Mobile technology</strong></p>
<p>All in one dengan online mode support berbagai os <a href="https://www.android.com/" target="blank" title="android">android</a> <a href="https://www.apple.com/id/iphone/" target="blank" title="android">iphone</a> windows maupun kebutuhan untuk offline mode tanpa biaya bulanan untuk kebutuhan mesin kasir mu.</p>
<Link class="button" to="/applikasi">Aplikasi</Link> <Link class="button button-outline" to="/pos">Hardware</Link>
</div>
</div>
    </Layout>
  )
}

export default Accounting
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