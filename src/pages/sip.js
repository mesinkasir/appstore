import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Sip = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="APLIKASI RESTORAN ONLINE SIP RESTOAPPS" />
      <Bio />
      <h1><strong><a title="APlikasi restoran online sip resto apps" href="/restox">SIP RESTO APPS</a></strong></h1>
      <p>Aplikasi restoran yang mudah digunakan dilengkapi dengan fitur meja plus desain interface terbaik menjadikan sip resto apps semakin simple dalam digunakan pada usaha restoran rumah makan cafe dan usaha kuliner.</p>
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/apprestaurantonline-sipresto.png"/>
<p>
Universal dalam installasi nya, mudah di install via offline desktop mode untuk kebutuhan dengan single mesin kasir standalone maupun dengan kebutuhan untuk pembagian databased dan bekerja bersama sama secara langsung, baik akses admin , kasir hingga waiters order.
</p>
<div class="row text-center">
<div class="col-12 col-md-4 p-0 p-md-0">
<img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/tabelsipresto.png"/>
</div>
<div class="col-12 col-md-8 p-5 p-md-3 text-left">
<h3><a title="APlikasi Mobile Restoran Apps" href="/restox">MOBILE RESTO APPS</a></h3>
<p>
Penggunaan system meja , semakin memudahkan dalam kebutuhan untuk kontrol order pelanggan dan mencatat pesanan pelanggan berdasarkan meja yang ditempati nya, dengan online web app memudahkan waiters untuk mencatat pesanan pelanggan via handphone android maupun iphone nya, serta fungsi indikator dengan meja ditempati memudahkan untuk pemilihan meja untuk kebutuhan pencatatan order pelanggan. dan tentunya fitur meja ini sekaligus memudahkan kasir dalam bertransaksi sesuai dengan meja pelanggan, tinggal klik meja pelanggan secara otomatis aplikasi akan menampilkan detail order dengan total nominal nya.
</p>
    </div>
    <div class="col-12 col-md-12 p-3 p-md-5">
    <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/menus makanan minuman sip resto app.png"/>
<p>
Fitur : master database user , meja , group categori menu makanan minuman, menu saji makanan minuman, pembelian , penjualan kasir dengan pencatatan meja, print out percetakan bill dan struk kasir , rangkuman laporan laporan detil list pendapatan omset income profit.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Sip%20resto%20apps.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=qUVW4dqYZBU" target="blank">Mobile Apps</a> <a class="button" href="https://www.youtube.com/watch?v=3vM0U8wLu3Y&t=3s" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/zresto">&larr; Z-Resto</Link> <Link class="float-right" to="/samba">Samba &rarr;</Link>
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

export default Sip
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
