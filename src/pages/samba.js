import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Samba = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mesin kasir restoran cafe rumah makan touchscreen murah" />
      <Bio />
      <h1><strong><a title="Mesin kasir restoran murah" href="/samba">RESTO SAMBA</a></strong></h1>
      <p><a href="/samba">Mesin kasir restoran murah</a> dengan touchscreen metode semakin modern dan cepat dalam bertransaksi mengusung system electronic cash register semakin portable dalam penggunaan pembukuan dan transaksi secara cepat dengan layar sentuh,hingga laporan detail.</p>
<div class="row text-center">
<img class="img-fluid" alt="mesin kasir restoran" src="/img/samba/mesin kasir restoran cafe LENGKAP murah terbaru.jpg"/> 
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> memudahkan installasi via local server desktop offline untuk kebutuhan single stand alone mesin kasir touchscreen, dengan bahasa pemrograman <a href="https://www.java.com/" target="blank">JAVA</a> feat <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a>.</p>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="mesin kasir murah restoran cafe rumah makan" src="/img/samba/1.png"/>
<p class="text-left">Kebutuhan dengan pencatatan no meja restoran rumah makan dan cafe semakin memudahkan dalam akitivitas transaksi dan pemesanan nya,hingga hadirnya area resto cafe misalnya lokasi indoor outdoor lantai dll.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/samba/12.png"/>
<p class="text-left">Metode penjualan pos point of sale fastfood untuk penjualan langsung tersedia pada mesin kasir restoran murah untuk mu.</p>
</div>
<img class="img-fluid" alt="mesin kasir restoran termurah" src="/img/samba/mesin kasir restoran cafe murah terbaru.jpg"/> 
<div class="col-12 col-md-12 p-3 p-md-3"><p>Feature terbaik dengan kompleks system tersedia untuk digunakan inilah era mesin kasir modern untuk menunjang restoran cafe rumah makan mu.</p></div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/samba/10 laporan.png"/>
</div>
<div class="col-12 col-md-3 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/samba/11 laporan.png"/>
</div>
<div class="col-12 col-md-3 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/samba/9 laporan.png"/>
</div>
<div class="col-12 col-md-12 p-3 p-md-3">
<p>Fitur laporan detail untuk cek omset pendapatan profit per periode semakin memudahkan dalam kebutuhan customise laporan omset sesuai kebutuhan dan memungkinkan print langsung via printer kasir mu, seperti electronic cash resgiter inilah solusi terbaik dengan portable system dalam penggunaan <a href="/samba">Mesin kasir restoran cafe rumah makan touchscreen murah</a>.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/SAMBA%20MESIN%20KASIR%20TOUCHSCREEN%20MURAH.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/pFd4t9yKFaM" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/restoboost">&larr; Boosterpos Resto</Link> <Link class="float-right" to="/mrresto">Mr.Resto POS &rarr;</Link>
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

export default Samba
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