import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Website = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Pembuatan website dengan technology modern terbaru - desain website" />
      <Bio />
      <h1><strong><a title="Applikasi Toko Online shop" href="/dexopos">Website design services</a></strong></h1>
<p>Pembuatan website dengan technology modern terbaru - desain website.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" width="100%" alt="pembuatan website" src="/img/web modern.png"/>
<p>Solusi kebutuhan untuk pembangunan project website modern dengan technology terbaru maupun menggunakan aplikasi pembuatan website memudahkan dalam kebutuhan untuk membuat dan membangun website dengan mudah, selalu update dengan technology terbaru dalam develope website dengan menggunakan framweork semakin memudahkan dalam kebutuhan membangun website yang sempurna dan elegan, plus sentuhan desain agar website maupun blog menjadi lebih mewah dan elegan. 
</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/aplikasi%20kasir%20toko%20penjualan%20online%20terbaru%20keren%20(1).png"/> 
<p>
Dexopos apps era mesin kasir online modern dalam kebutuhan untuk transaksi kasir cepat hingga rangkuman pembukuan detail, dan desain dengan full touchscreen semakin memudahkan dalam kebutuhan technology online untuk kemajuan bisnis dan usaha, landing page website menyempurnakan akan kebutuhan memperluas market pada dunia online dengan memiliki website sendiri memudahkan dalam penyampaian produk dan jasa maupun company profile dan usaha mu, semakin dipercaya pelanggan dengan website mandiri mu ini. all in one modern website dan aplikasi kasir toko menjadi satu menyempurnakan dexopos shop untuk digunakan.
</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/mobile pos aplikasi toko online modern  penjualan kasir terbaru (4).png"/> 
</div>
<div class="col-12 col-md-8 p-3 p-md-3">
<h3><strong><a title="Applikasi toko kasir online web apps" href="/dexopos">Mobile POS on the Go !!</a></strong></h3>
<p>Dengan installasi langsung secara online memudahkan dalam akses via smartphone android iphone hingga mesin kasir windows dimana saja dan kapan saja secara real time online semakin mobile dalam aktivitas pembukuan dan membantu pekerjaan via smartphone masing masing karyawan secara langsung, saat nya revolusi digital dimulai untuk usaha mu.</p>
<p>
Fitur dexopos web apps : master databased , karyawan user , kategori group produk untuk pengelompokan produk lengkap dengan gambar wallpaper, produk include dengan gambar foto produk, penjualan kasir point of sale dengan dukungan pemilihan gambar foto produk plus kategori yang memudahkan dalam pencarian produk , rangkuman laporan detail untuk kebutuhan dalam cek laporan income profit secara detail dan terperinci .
</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/dexopos%20shop.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=1PWUy4woxSM&t=11s" target="blank">Mobile</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYMuYq7kJSmSGzF9SHvh_UWt" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/codepos">&larr; Codepos</Link> <Link class="float-right" to="/dxretail">DX-Retail &rarr;</Link>
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

export default Website
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
