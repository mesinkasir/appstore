import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Hockeypos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Applikasi toko" />
      <Bio />
      <h1><strong><a title="Applikasi Toko" href="/hockeypos">HOCKEY POS</a></strong></h1>
<p>Sangat mudah dan dengan dukungan fitur lengkap nan simple memudahkan dalam aktivitas pembukuan baik offline mode maupun untuk online mode.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko" src="/img/hockeypos/hockeyposonline.jpg"/>
<p class="text-left">Modern web based technology memudahkan dalam akses berbagai device multi platform smartphone handphone android iphone hingga mesin kasir windows, dapat digunakan untuk kebutuhan offline desktop singgle standalone maupun untuk online mode dengan multiple login dalam kebutuhan nya.</p>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/hockeypos/hockeypos.png"/> </div>
<div class="col-12 col-md-8 p-3 p-md-3 text-left">
<h3><a title="Applikasi Toko Online" href="/hockeypos">APLIKASI TOKO</a></h3>
<p>Kebutuhan akan aplikasi toko yang simple dan lengkap mudah digunakan hockeypos adalah rekomendasi terbaik untuk mu berawal dari opos menjadi lebih baik dengan dukungan offline desktop mode maupun online clouds web based technology yang memudahkan akses via smartphone android iphone mu secara langsung.</p>
<p>Lakukan transaksi dan cek pembukuan mu kini semakin mudah dengan metode online system dalam penggunaan nya.</p>
</div>
<img class="img-fluid" alt="aplikasi toko online" src="/img/hockeypos/6 pos penjualan kasir.png"/>
<p>Semakin cepat penjualan dengan metode barcode laser tinggal scan kode barcode produk maka system otomatis akan menampilkan detail ID produk , jika tanpa menggunakan kode barcode cukup lakukan pencarian maka secara otomatis <a href="/hockeypos" title="aplikasi toko">aplikasi toko</a> akan menampilkan query hasil pencarian produk.</p>
<div class="col-12 col-md-6">
<img class="img-fluid" alt="aplikasi toko online" src="/img/hockeypos/7 laporan periode.png"/>
</div>
<div class="col-12 col-md-6">
<img class="img-fluid" alt="aplikasi toko online" src="/img/hockeypos/7 laporan penjualan rinci.png"/>
</div>
<p>Laporan detail laba rugi dan profit semakin memudahkan dalam kebutuhan pembukuan dan tersedia laporan stok inventori serta laporan detail pembukuan lain nya.</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/HOCKEY%20POS.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/aDmf3EQlBVY" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/axcorapos">&larr; Axcorapos</Link> <Link class="float-right" to="/simplepos">Simple POS &rarr;</Link>
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

export default Hockeypos
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