import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tokoonline = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="TOKO ONLINE SHOP" />
      <Bio />
      <h1><strong><a title="Applikasi toko online shop" href="/tokoonline">TOKO ONLINE</a></strong></h1>
<p>Aplikasi kasir pos dan online shop toko online website modern integrasi terbaik dari inventori stok hingga laporan laporan detail.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko" src="/img/tokoonline/integrated pos aplikasi kasir online dan online shop.jpg"/>
<p class="text-left">Modern web based technology memudahkan dalam akses berbagai device multi platform smartphone handphone android iphone hingga mesin kasir windows,online mode dengan multiple login dalam kebutuhan nya.</p>
</div>
<img class="img-fluid" alt="aplikasi toko" src="/img/tokoonline/online shop aplikasi kasir online dan online shop.jpg"/>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
<div class="col-12 col-md-6 p-3 p-md-5 text-left">
<h3><strong><a title="Applikasi kasir Toko Online" href="/multipos">APLIKASI TOKO ONLINE</a></strong></h3>
<p>Aplikasi toko online shop website semakin keren website toko online shop integrasi dengan aplikasi kasir point of sale kamu, ini lah era modern untuk bisnis dan usaha mu,dengan online shop toko online website memudahkan pelanggan untuk melakukan order secara langsung via website mu plus tata cara order semakin memudahkan transaksi.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko" src="/img/tokoonline/aplikasi kasir online shop website (5).jpg"/></div>
<p>Era modern web based technology memudahkan dalam aktivitas pembukuan semakin mobile dalam menunjang mobilitas pekerjaan hingga kemudahan dalam bertransaksi baik via online shop maupun via aplikasi pos kasir penjualan.</p>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko" src="/img/tokoonline/wepos updates.png"/>
</div>
<div class="col-12 col-md-6 p-3 p-md-3 text-left">
<p>Menggunakan cms <a href="https://wordpress.org" target="blank">wordpress</a> semakin memudahkan mu dalam update artikel post produk hingga blog via online shop toko online mu, all in one integrasi era mesin kasir online modern via aplikasi toko online shop.</p>
<p>Sangat mudah digunakan dengan simple system dan kompleks dalam kebutuhan bertransaksi dan pencatatan pembukuan , tersedia variant pilihan produk semakin memudahkan dalam aktivitas penjualan berdasarkan variant misal ukuran warna dan lain lain.</p>
</div>
<p>Integrasi system semakin memudahkan dalam kebutuhan inventori stok management ketika terjadi transaksi baik via online shop toko online dan aplikasi toko maka secara otomatis akan memotong stok dan dirangkum dalam laporan penjualan include dengan profit income penjualan.</p>
<img class="img-fluid" alt="aplikasi toko" src="/img/tokoonline/mobile pos aplikasi mesin kasir online dan online shop.jpg"/>
<p>Kini saat nya anda untuk selangkah lebih maju dengan integrated pos point of sale system.</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Integrated%20pos.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYNBkHFGWTzsNWA3ZQEHrCsD" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/pointofsale">&larr; Chrompos</Link> <Link class="float-right" to="/multipos">Multi pos &rarr;</Link>
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

export default Tokoonline
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