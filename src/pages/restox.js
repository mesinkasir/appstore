import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Restox = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="APLIKASI RESTORAN ONLINE TERBARU" />
      <Bio />
      <h1><strong><a title="APlikasi restoran online terbaru" href="/restox">RESTO-X</a></strong></h1>
      <p>Aplikasi restoran web app online technology terbaru dengan lengkap nya fitur memudahkan dalam kontrol secara powerfull penggunaan <a href="/restox">aplikasi</a> ini untuk <a href="/restox">restoran cafe rumah makan</a> dan usaha kuliner lain nya.</p>
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/resto-x/aplikasi restoran online web app modern.jpg"/>
<p>
Solusi terbaik dalam kebutuhan online clouds web app untuk kebutuhan usaha restoran cafe dan kuliner dalam menggunakan aplikasi lengkap ini, mudah digunakan dan stabil dengan online mode dalam penerapan nya, dukungan web server litespeed technology menjaga kestabilan dan kecepatan dalam digunakan secara online, dan untuk keamanan secure system letsencypt dan cloudsflare dengan sertifikasi SSL sudah siap dalam mengawal keamanan data pada clouds system. 
.</p>
<div class="row text-center">
<div class="col-12 col-md-4 p-0 p-md-0">
<img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/resto-x/aplikasi restoran online app web based.png"/>
</div>
<div class="col-12 col-md-8 p-5 p-md-3 text-left">
<h3><a title="APlikasi Mobile Restoran Apps" href="/restox">MOBILE RESTO APPS</a></h3>
<p>
Dengan installasi via clouds online memudahkan dalam resto-x web apps ini diakses via berbagai perangkat hardware mulai dari smartphone handphone android iphone hingga mesin kasir windows dalam operasional koneksi dengan web apps ini. dengan installasi via clouds maka tidak perlu lagi melakukan installasi pada perangkat anda yang menambah beban pada device yang digunakan, cukup akses via web apps secara langsung dan lakukan login kini anda sudah siap dalam menggunakan resto-x web apps ini,web app modern memberikan kebebasan akan hal akses tanpa batas dengan staf karyawan untuk melakukan pekerjaan dengan 
<a title="Aplikasi Restoran" href="/restox">aplikasi restoran</a> ini,  Tidak lagi memikirikan minimum spesifikasi device dan OS yang digunakan dengan resto web app memudahkan segala kebutuhan dalam bekerja secara cepat via mobile restoran apps . saat nya update dan upgrade pembukuan digital restoran cafe rumah makan dengan menggunakan resto-x web apps ini. 
</p>
    </div>
    <div class="col-12 col-md-12 p-3 p-md-5">
<p>
Fitur : master database user , supplier, membercard , meja , group categori menu makanan minuman, menu saji makanan minuman, pembelian , pencatatan kas keluar, penjualan kasir dengan metode full touchscreen hingga support dengan barcode jika dibutuhkan, print out percetakan bill dan struk kasir , rangkuman laporan laporan detil seperti pendapatan omset income profit , penjualan , dan berbagai laporan lain nya.
</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/RESTO-X.pdf" target="blank">Download</a> 
    <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYN5uzqK0AkwELTt3HkCQ8il" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/restoonline">&larr; Online Resto</Link> <Link class="float-right" to="/dxresto">Dexopos Resto &rarr;</Link>
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
