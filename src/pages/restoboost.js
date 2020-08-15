import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Restoboost = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi restoran" />
      <Bio />
      <h1><strong><a title="Aplikasi restoran online" href="/restoboost">RESTO APP</a></strong></h1>
      <p>Kebutuhan terbaik dengan simple system dan kompleks dalam penggunaan nya, support dengan online based app memudahkan dalam mobilitas akses via smartphone dan tablet hingga mesin kasir mu, offline desktop untuk singgle standalone.</p>
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/restoboost/mesin software kasir restoran cafe online.jpg"/>
<div class="row text-center">
<div class="col-12 col-md-8 p-3 p-md-3 text-right">
  <h3><strong><a href="/restoboost" title="aplikasi restoran online android iphone windows">Mobile Resto POS</a></strong></h3>
<p>Aplikasi restoran online dan bisa digunakan offline dengan kebutuhan singgle stand alone mesin kasir dalam mencatat dan bertransaksi pada restoran cafe rumah makan warkop angkringan toko oleh oleh anda.</p>
<p>Sensasi bertransaski via smartphone android iphone hingga mesin kasir windows via online mode semakin mobile dan mobilitas pekerjaan,dan semakin memudahkan dalam berbagai kebutuhan pekerjaan.</p>
<p>Technology menggunakan dukungan server <a href="https://www.apachefriends.org/" target="blank">XAMPP</a> memudahkan dalam instalasi via clouds online maupun via offline terminal desktop untuk kebutuhan system yang lebih cepat stabil dan powerfull.</p>
<p>Dan kini dunia dalam genggaman anda.</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir restoran" src="/img/restoboost/mesin software kasir restoran cafe online4 - Copy - Copy.jpg"/> 
</div>
<img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/restoboost/mesin software kasir restoran cafe online1.jpg"/>
<p>Menggunakan databased <a href="https://www.mysql.com/" target="blank">mysql</a> semakin memudahkan dalam setiap operasional kebutuhan dan lebih stabil dalam pengelolahan databased,bahasa <a href="https://www.php.net/" target="blank">PHP</a> memudahkan dalam user interface untuk operasional aplikasi kasir restoran online ini.</p>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir restoran" src="/img/restoboost/aplikasi restpo cafe online android ios (1).png"/> 
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir restoran" src="/img/restoboost/aplikasi restpo cafe online android ios (4).png"/> 
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir restoran" src="/img/restoboost/aplikasi restpo cafe online android ios (2).png"/> 
</div>
<p>Fitur lengkap mulai masterdatabased untuk regristasi menu makanan dan minuman, inventori stok management, penjualan point of sale kasir dengan pencatatan keterangan nama pelanggan , no meja dan lain lain, fitur bill dan list order untuk cek order dan cetak bill berdasarkan keterangan kebutuhan,pembayaran bill , transaksi dengan cash card hingga online payment, laporan laporan detail tersedia secara rinci hingga cek omset profit pendapatan resto cafe.  </p>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="mesin kasir restoran" src="/img/restoboost/mesin software kasir restoran cafe online2.jpg"/> 
<p class="text-left">Dukungan mesin kasir hybrid technology menggunakan tablet windows by hewllet packard semakin sempurna dalam integrasi dengan pos system penjualan via aplikasi restoran online ini.
</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="mesin kasir restoran" src="/img/restoboost/mesin software kasir restoran cafe online3.jpg"/> 
<p class="text-left">All in one touchscreen by ASUS tehnology semakin mewah dalam digunakan mesin kasir restoran untuk bertransaksi sekaligus pembukuan detail terperinci.
</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Boosterpos%20Resto%20App.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=5OPqg3jOo2k" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/restoonline">&larr; Online Resto</Link> <Link class="float-right" to="/funresto">Resto Samba &rarr;</Link>
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

export default Restoboost
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
