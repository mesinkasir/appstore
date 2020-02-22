import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Inventori = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi inventori stok online plus bonus invoice" />
      <Bio />
      <h1><strong><a title="aplikasi inventori software program stok" href="/inventori">SIMPLE</a></strong></h1>
<p>Simple management dengan kebutuhan akan invoice dan inventori online dengan dual based memudahkan karyawan untuk fokus pada masing masing divisi dan memudahkan owner cek report per divisi dalam kebutuhan nya.</p>
<div class="row text-center">
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/simpleinv/software aplikasi system invoice stock inventory1.jpg"/>
<div class="col-12 col-md-7 p-0 p-md-0">
<img alt="aplikasi accounting software program akuntansi" class="img-fluid" src="/img/simpleinv/software aplikasi system invoice stock inventory2.jpg"/>
    </div>
    <div class="col-12 col-md-5 p-3 p-md-3 text-left">
    <h3><strong><a href="/inventori" title="inventori invoice online">Management</a></strong></h3>
<p>Dengan online based memudahkan akses via smartphone sehingga memudahkan karyawan untuk berkerja dengan akses applikasi via smartphone nya guna membantu transaksi dan mencatat pembukuan details.<br/><small>Inventori invoice online</small></p>
    </div>
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/simpleinv/software aplikasi system invoice stock inventory.jpg"/> 
<p class="text-left">Rasakan kemudahan dalam bekerja dengan operasional yang simple nan kompleks dukungan <a href="https://www.apachefriends.org/" target="blank">Xampp</a> web server dan menggunakan bahasa programing <a href="https://www.php.net/" target="blank">PHP</a> plus databased populer dunia dengan <a href="https://www.mysql.com/" target="blank">MySql</a> memudahkan karyawan berbagai divisi untuk bertugas menjalankan tugas nya via aplikasi ini, sangat cepat karena menggunakan web based system sehingga tidak perlu melakukan installasi apk app dan exe pada device anda.</p>
</div>
<div class="col-12 col-md-5 p-0 p-md-0">
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/simpleinv/software stok inventory dan invoice simple management.png"/></div>
<div class="col-12 col-md-7 p-3 p-md-5">
<p class="text-left">Solusi Inventori online dan invoice online modern untuk berbagai kebutuhan , dan include website company profile lakukan upgrade plus website untuk mendapatkan akses website company profile agar perusahaan lebih terpercaya.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="invoice accounting terbaru" src="/img/simpleinv/software aplikasi system stock inventory.jpg"/> 
<p class="text-left">Cek inventori stok semakin mudah, dan kebutuhan transaksi in out stok semakin cepat dengan kemudahan akses via smartphone memudahkan seluruh karyawan untuk membantu melakukan pekerjaan dengan menggunakan smartphone nya dalam bertrasaksi stok sesuai dengan divisi nya.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="inventori invoice barcode online" src="/img/simpleinv/software aplikasi system stock invoice.jpg"/>
<p class="text-left">Invoice online memudahkan karyawan untuk akses dan login sesuai dengan jabatan nya dalam bertugas, memudahkan sales penjualan untuk mencetak invoice secara langsung ketika transaksi dimana saja dan kapan saja via smartphone nya, semakin mobile dalam kebutuhan office.</p>
</div>
<img class="img-fluid" alt="Aplikasi akuntansi accounting software program" src="/img/simpleinv/program kasir invoice online handphone android ios windows.jpg"/>
<div class="col-12 col-md-12 p-3 p-md-5">
<p>Dual based memudahkan dalam kebutuhan untuk cek laporan inventori dan laporan invoice perdivisi semakin kompleks dalam kebutuhan dan memudahkan karyawan semakin fokus pada pekerjaan nya masing masing ini lah era invoice inventori online untuk kebutuhan usaha.</p>
<a class="button" href="https://mesinkasir.github.io/e-catalog/SIMPLE%20MANAGEMENT%20APP.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYMVdlLOYbvbgyO6SzA7lwHg" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>
<br/><br/><Link class="float-left" to="/accounting">&larr; Accounting</Link> <Link class="float-right" to="/next">Next Invoice &rarr;</Link>
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

export default Inventori
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