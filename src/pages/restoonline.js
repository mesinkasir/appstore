import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Restoonline = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Online Aplikasi restoran" />
      <Bio />
      <h1><strong><a title="Aplikasi restoran online" href="/restoonline">RESTO ONLINE</a></strong></h1>
      <p>Online web based technology aplikasi restoran online include dengan online shop website untuk restoran memudahkan dalam setiap transaksi dan pembukuan, integrasi terlengkap online shop website dan aplikasi kasir restoran online.</p>
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/restoonline/integrated resto pos aplikasi kasir online dan online shop COMPLEKS.jpg"/>
<div class="row text-center">
<div class="col-12 col-md-8 p-3 p-md-3 text-right">
  <h3><strong><a href="/restoonline" title="aplikasi restoran online android iphone windows">New Modern Techno</a></strong></h3>
<p>Aplikasi restoran online dan include dengan online shop order via website restoran cafe memudahkan dalam setiap transaksi yang terintegrasi dengan system online.</p>
<p>Applikasi resto online pos digunakan untuk bertransaksi secara langsung dengan pengunjung dan pelanggan yang datang di cafe restoran anda, dengan touchscreen metode plus pilihan kategori menu makanan dan minuman dan variant pilihan menjadikan terbaik dan cepat dalam transaksi point of sale kasir.</p>
<p>Website online memungkinkan pelanggan untuk melakukan pemesanan secara online di website restoran cafe lengkap dengan petunjuk cara transaksi pemesanan hingga pengiriman tujuan order,selanjutnya reminder via email akan dikirimkan ke anda untuk mempersiapkan order pelanggan secara online.</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/restoonline/cek laporan online.jpg"/> 
</div>
<img class="img-fluid" alt="aplikasi kasir restoran online order" src="/img/restoonline/integrated resto pos aplikasi kasir online dan online shop.jpg"/>
<p>Menggunakan web based dengan <a href="https://wordpress.com" target="blank">wordpress</a> cms dan databased <a href="https://www.mysql.com/" target="blank">mysql</a> semakin memudahkan dalam setiap operasional kebutuhan dan lebih stabil dalam pengelolahan databased,bahasa <a href="https://www.php.net/" target="blank">PHP</a> memudahkan dalam user interface untuk operasional aplikasi kasir dan website restoran cafe online ini.</p>
<div class="col-12 col-md-8 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir restoran" src="/img/restoonline/ONLINE ORDER RESTORAN - ONLINE SHOP WEBSITE RESTORAN.jpg"/> 
</div>
<div class="col-12 col-md-4 p-3 p-md-3 text-left">
<p>Terintegrasi dengan baik dan akan dirangkum dalam laporan detail memudahkan dalam pembukuan, transaksi via online website dan aplikasi kasir pos all in one dalam satu kesatuan databased.</p>
<p>Web based technology memungkinkan akses via smartphone mu secara langsung baik android iphone hingga mesin kasir windows.</p>
</div>
<p>Fitur lengkap mulai masterdatabased untuk regristasi menu makanan dan minuman, inventori stok management, penjualan point of sale kasir via aplikasi restoran online , website restoran cafe include dengan online order system , pilihan menu misal nya rasa porsi dan lain lain, serta laporan laporan details.</p>
<div class="col-12 col-md-6 p-3 p-md-3 text-right">
<p>Package set mesin kasir restoran portable hingga all in one pos touchscreen tersedia guna menunjang transaksi dan pembukuan dengan hardware pilihan terbaik untuk digunakan.</p>
<p>Free instalasi dan setting siap pakai !!</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="mesin kasir restoran" src="/img/restoonline/mesin kasir restoran online.jpg"/> 
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Integrated%20Resto%20POS.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/v832gwkGbDk" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/restopos">&larr; Unipos Resto</Link> <Link class="float-right" to="/restoboost">Boosterpos Resto &rarr;</Link>
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

export default Restoonline
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