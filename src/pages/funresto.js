import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Restox = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="APLIKASI RESTORAN ONLINE MURAH" />
      <Bio />
      <h1><strong><a title="APlikasi restoran online murah" href="/restox">FUN RESTO APPS</a></strong></h1>
      <p>Fun resto apps adalah applikasi restoran online murah untuk menunjang usaha kecil special untuk restoran cafe rumah makan dan kuliner lain nya, desain UI terbaik semakin mempercepat transaksi pada kasir.</p>
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/restaurant application (3).png"/>
<p>
Solusi terbaik dalam kebutuhan online clouds web app untuk kebutuhan usaha restoran cafe dan kuliner dalam menggunakan aplikasi lengkap ini, mudah digunakan dan stabil dengan online mode dalam penerapan nya, dukungan web server litespeed technology menjaga kestabilan dan kecepatan dalam digunakan secara online, dan untuk keamanan secure system letsencypt dan cloudsflare dengan sertifikasi SSL sudah siap dalam mengawal keamanan data pada clouds system. 
.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir restoran online murah" src="/img/restaurant application (6).png"/>
</div>
    <div class="col-12 col-md-12 p-3 p-md-5">
    <p>
    Dilengkapi dengan pencatatan no meja pada transaksi kasir memudahkan dalam mencatat dan mencetak penjualan kasir via mesin kasir , klik receipt print untuk melakukan print out struk kasir untuk bukti pembayaran kepada pelanggan, simple dan fokus pada penjualan kasir restoran semakin mempercepat dan membantu penjualan kasir plus laporan list penjualan tersedia pada rangkuman laporan.
    </p>
<p>
Fitur : master database user , staff, meja , group categori menu makanan minuman, menu saji makanan minuman, pembelian ,penjualan kasir dengan metode full touchscreen hingga support dengan animasi foto menu untuk mempercantik display kasir penjualan, print out percetakan bill dan struk kasir , rangkuman laporan laporan list penjualan detail.
</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/funrestoapp.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=hiVT-MZmUwk&t=79s" target="blank">Video</a> <a class="button" href="https://www.youtube.com/watch?v=rPhovshZa9I" target="blank">Mobile</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/restoboost">&larr; Boosterpos Resto</Link> <Link class="float-right" to="/zresto">Z-Resto &rarr;</Link>
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

export default Restox
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
