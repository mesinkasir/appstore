import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Zresto = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="APLIKASI RESTORAN Apps" />
      <Bio />
      <h1><strong><a title="APlikasi restoran online" href="/zresto">Z-Resto Apps</a></strong></h1>
      <p>Aplikasi restoran online mudah digunakan dengan simple system untuk fokus pada penjualan kasir sangat cocok digunakan pada usaha kecil kuliner.</p>
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/aplikasi restoran online mobile pos web apps (1).jpg"/>
<p>
Z-Resto Apps adalah modern app yang tidak lagi membutuhkan installasi pada device atau proses installasi dalam digunakan , karena aplikasi restoran ini sudah terinstall secara clouds online beserta databased, dengan full online metode ini semakin cepat dalam menggunakan online apps .
</p>
<div class="row text-center">
<div class="col-12 col-md-4 p-0 p-md-0">
<img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/aplikasi restoran online web apps.jpg"/>
</div>
<div class="col-12 col-md-8 p-5 p-md-3 text-left">
<h3><a title="APlikasi Mobile Restoran Apps" href="/zresto">MOBILE RESTO APPS</a></h3>
<p>
kemudahan dalam waiters untuk bekerja dengan cepat via aplikasi ini, mudah digunakan dan dengan web app memudahkan akses langsung via web app tanpa perlu installasi pada device yang digunakan, akses via smartphone android iphone hingga mesin kasir restoran windows semakin mudah dalam berbagai aktivitas untuk mempercepat penjualan kasir restoran cafe dan rumah makan.
</p>
<p>
Tanpa perlu installasi dan dapat digunakan dengan berbagai user memudahkan untuk digunakan dengan banyak user secara unlimited saat nya upgrade pembukuan dan transaksi digital dengan online web apps untuk mobilitas usaha.
</p>
</div>
    <div class="col-12 col-md-12 p-3 p-md-5">
      <img class="img-fluid" alt="aplikasi kasir restoran online" src="/img/aplikasi restoran online mobile pos web apps (3).png"/>
<p>
Fitur : master database user account untuk fitur login menggunakan web app beserta dengan password ,group menu categories untuk mengelompokan menu berdasarkan kategori nya, Menu makanan dan minuman include dengan gambar foto menu , POS penjualan kasir fitur dengan penjualan menggunakan gambar foto menu makanan dan minuman, serta report list penjualan kasir via rangkuman laporan details.
</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Z-Resto.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=KU8RLi0m8g0" target="blank">Mobile Apps</a> <a class="button" href="https://www.youtube.com/watch?v=CTiEkkZc6mU&t=7s" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/funresto">&larr; Fun Resto</Link> <Link class="float-right" to="/sip">Sip Resto &rarr;</Link>
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

export default Zresto
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
