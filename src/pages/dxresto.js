import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Dxresto = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="APLIKASI RESTORAN MOBILE WAITERS APPS" />
      <Bio />
      <h1><strong><a title="APlikasi restoran online dengan mobile waiters apps" href="/dxresto">DEXOPOS RESTO</a></strong></h1>
      <p>
      APlikasi restoran online dengan mobile waiters apps, dengan installasi via online clodus memudahkan dalam akses via berbagai device dan platform OS memudahkan untuk kebutuhan pekerjaan dengan pembagian divisi dalam penerapan nya.
</p>
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/aplikasi restoran online dx.png"/>
<p>
Kemampuan nya dalam digunakan via desktop mode offline version sekali beli untuk selamanya maupun via online couds based untuk kebuutuhan multi akses, memudahkan dalam berbagai kebutuhan system yang anda inginkan.
</p>
<div class="row text-center">
<div class="col-12 col-md-4 p-0 p-md-0">
<img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/TOUCHSCREEN dx-resto.png"/>
</div>
<div class="col-12 col-md-8 p-5 p-md-3 text-left">
<h3><a title="APlikasi Mobile Restoran Apps" href="/dxresto">MODERN TECHNOLOGY RESTO APPS</a></h3>
<p>
Aplikasi restoran modern dengan develope menggunakan <a href="https://laravel.com" class="text-secondary" target="blank">laravel php artisan</a> semakin powerfull dan stabil untuk diguakan dalam berbagai kebutuhan. desktop version apps memudahkan integrasi <a href="/dxresto">mesin kasir restoran</a> untuk mempercepat transaksi pada kasir, selain itu fitur meja memudahkan pencatatan order pesanan pelanggan berdasarkan meja yang ditempati, untuk percetakan bill dan meja kasir tinggal memilih lokasi meja yang ditempati pelanggan , simple dan cepat menggunakan dexopos resto apps untuk restoran cafe rumah makan.
</p>
    </div>
    <div class="col-12 col-md-12 p-3 p-md-5">
 <img class="img-fluid" alt="mobile waiters app" src="/img/dxresto pos web app.png"/>
 <p>Support dengan waiters mobile apps, memudahkan untuk waiters mencatat pesanan pelanggan via smartphone secara langsung atau pun via tablet dalam penggunaan nya, dengan <a href="/dxresto">mobile waiters apps</a> semakin mempercepat untuk mencatat pemesanan pelanggan.</p>
<p>
Fitur : master database user , meja, group categori menu makanan minuman, menu saji makanan minuman, penjualan kasir dengan metode full touchscreen bergambar menu makanan dan minuman , print out percetakan bill dan struk kasir , rangkuman laporan laporan detil seperti pendapatan omset income profit per peridoe, per hari per minggu atau per bulan.
</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/dexoposrestoapps.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=-tUL6C1IIJI" target="blank">Mobile Waiters</a> <a class="button" href="https://www.youtube.com/watch?v=fafCewP9xJk" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/restox">&larr; Resto-X</Link> <Link class="float-right" to="/restoboost">Boosterpos Resto &rarr;</Link>
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

export default Dxresto
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
