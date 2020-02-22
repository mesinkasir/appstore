import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Boost = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Applikasi toko android iphone online" />
      <Bio />
      <h1><strong><a title="Applikasi TOko" href="/boost">BOOSTERPOS</a></strong></h1>
<p>Aplikasi toko boosterpos simple mudah dan lengkap dengan kelebihan pencatatan piutang pelanggan dan penjualan dengan mode credit cicilan menjadi sempurna untuk kebutuhan toko mu.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/boost/onlinemesinkasir (5).jpg"/>
<p class="text-left">Menggunakan web based technology memudahkan dalam akses berbagai device multi platform smartphone handphone android iphone hingga mesin kasir windows, dapat digunakan untuk kebutuhan offline desktop singgle standalone maupun untuk online mode dengan multiple login dalam kebutuhan nya.
</p>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
</div>
<div class="col-12 col-md-6">
<img class="img-fluid" alt="aplikasi toko online" src="/img/boost/onlinemesinkasir (1) - Copy.jpg"/> 
</div>
<div class="col-12 col-md-6 p-3 p-md-5 text-left">
<h3>Mobile POS on the Go !!</h3>
<p>Dengan online mobile pos on the go system memberikan kemudahan dalam akses dan melakukan pekerjaan via smartphone mu dimana saja dan kapan saja secara real time online semakin mobile dalam kebutuhan transaksi dan monitoring pembukuan.</p>
<p>A digital revolutions.</p>
</div>
<img class="img-fluid" alt="aplikasi toko online" src="/img/boost/onlinemesinkasir (3).jpg"/>
<p>Dengan web server memudahkan dalam akses via local host maupun cloud host local untuk kebutuhan desktop offline dengan single standalone mesin kasir point of sale system dalam penggunaan nya.</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/boost/onlinemesinkasir (2).jpg"/>
<p>Simple fitur dan lengkap mulai dari master based produk , pos point of sale penjualan , transaksi list, stok inventori management , fitur pembayaran piutang dan credit pelanggan , cek profit income omset pendapatan , dan kebutuhan lain nya.<br/>Dapat digunakan offline dengan single standalone maupun online akses via berbagai device,dengan online system maka kini dunia dalam genggaman anda.</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Boosterpos%20Retail%20Shop.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYNgKZQ0iiHZEUNbAoEvQzVV" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/simplepos">&larr; Simple pos</Link> <Link class="float-right" to="/ipos">IPOS &rarr;</Link>
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

export default Boost
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