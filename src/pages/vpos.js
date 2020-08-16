import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Vpos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="laravel Point of sale web apps" />
      <Bio />
      <h1><strong><a title="Applikasi TOko" href="/larapos">LARAPOS</a></strong></h1>
<p>Aplikasi toko online dengan kebutuhan untuk penjualan kasir retail eceran maupun grosir dengan harga yang berbeda beda memudahkan dalam melakukan penjualan kasir baik eceran maupun gorsir.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/aplikasi toko mesin kasir online laravel point of sale cashier apps (2).jpg"/>
<p>Develope menggunakan <a href="https://laravel.com" target="blank" class="text-secondary">laravel php artisan</a> semakin powerfull dan stabil untuk digunakan membangung aplikasi kasir toko dan website dalam satu apps untuk kebutuhan bisnis modern mu, laravel adalah salah satu framework populer dunia dan banyak digunakan para developer dalam kebutuhan untuk membangun website modern hingga kebutuhan untuk modern aplikasi yang membantu dalam penjualan kasir maupun pencatatan pembukuan dengan cepat , gunakan laravel untuk masa depan usaha yang indah.
</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/aplikasi toko mesin kasir online laravel point of sale cashier apps (3).jpg"/> 
<p>
Dukungan penuuh full online dengan hadirnya web server menggunakan litespeed technology semakin cepat untuk aktivitas online, dan dalam keamanan aplikasi dan databased mendapat backup dari sertifikasi SSL security by lets encrypt maupun cloudflare semakin aman dan nyaman dalam menggunakan larapos web apps ini.
</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/mesin kasir online point of sale online web apps.jpg"/> 
<h3><strong><a title="Applikasi TOko" href="/larapos">Mobile POS on the Go !!</a></strong></h3>
<p>Dengan installasi langsung secara online memudahkan dalam akses via smartphone android iphone hingga mesin kasir windows dimana saja dan kapan saja secara real time online semakin mobile dalam aktivitas pembukuan dan membantu pekerjaan via smartphone masing masing karyawan secara langsung, saat nya revolusi digital dimulai untuk usaha mu.</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/pembuatan website modern dengan laravel.jpg"/>
<p>System simple dan lengkap dalam menunjang berbagai kebutuhan untuk pembukuan dan mempercepat penjualan pada kasir, pada larapos ini memudahkan dalam pencatatan dan perbedaan antara harga retail eceran dan grosir plus hadirnya full pos penjualan system khusus untuk penjualan eceran dengan ketetapan harga retail eceran maupun grosir wholesale dengan harga gorsir langsung.</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/aplikasi toko mesin kasir online laravel point of sale cashier apps (4).jpg"/>
<p>Fitur mulai dari master databased , user account , satuan produk , kategori grouping produk , produk jual dengan penetapan harga eceran dan grosir, Penjualan kasir untuk retail eceran dan penjualan kasir grosir , laporan profit detail , backup restore databased dan berbagai fitur lain nya, semakin menarik dengan hadirnya website modern dengan clean design plus landing page memberikan informasi kepada pelanggan mengenai usaha dan detail produk maupun jasa yang disediakan pada usaha toko dan bisnis mu, online mode memudahkan larapos untuk digunakan dan diakses dimana saja secara real time online.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/larapos.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=Q65TPCAeQlU&t=17s" target="blank">Mobile</a> <a class="button" href="https://www.youtube.com/watch?v=hlGd7yk4nko" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/posx">&larr; POS-X</Link> <Link class="float-right" to="/codepos">Codepos &rarr;</Link>
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

export default Vpos
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
