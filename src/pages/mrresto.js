import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Mrresto = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Menu Digital Aplikasi restoran cafe rumah makan online" />
      <Bio />
      <h1><strong><a title="menu digital aplikasi restoran online" href="/mrresto">MR.RESTO</a></strong></h1>
      <p>Fokus untuk penjualan restoran cafe dengan menu digital system semakin keren untuk digunakan.</p>
<div class="row text-center">
<img class="img-fluid" alt="software restoran" src="/img/mr.resto/mr resto pos menu digital restoran cafe.jpg"/> 
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> memudahkan installasi via local server desktop offline untuk kebutuhan single stand alone mesin kasir maupun online host databased, dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a>.</p>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/1.login admin.png"/>
<p class="text-left">Admin memiliki login area tersendiri khusus untuk akses admin dengan kuasa dan akses dalam membuat memasukan databased hingga cek laporan laporan details.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/2. kasir login.png"/>
<p class="text-left">Kasir memiliki login fitur sendiri dan akan langsung tampilan kasir penjualan special dan khusus fokus untuk melakukan transaksi penjulan point of sale pos.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/3. menu awal.png"/>
<p class="text-left">Menu awal memudahkan dengan simple system dan fokus untuk penjualan semakin mudah dengan kebutuhan akan input data dan cek laporan secara detail pada menu utama.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/8. order pos penjualan 15.png"/>
<p class="text-left">Memudahkan penjualan dengan metode menu digital semakin cepat dan keren pada display tampilan menu digital restoran cafe.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/8. order pos penjualan 14.png"/>
<p class="text-left">Hadir dengan kategori semakin memudahkan pencarian dan pengelomokan menu makanan dan minuman secara cepat.</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/9. transaksi display.png"/>
<p class="text-left">Fitur transaksi pesanan yang simple dan lengkap memudahkan kasir untuk bertransaksi.</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/10. print out format.png"/>
<p class="text-left">Cetak print out struk kasir bukti transaksi penjualan secara cepat.</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="menu digital restoran cafe rumah makan" src="/img/mr.resto/12. laporan.png"/>
<p class="text-left">Fitur laporan detail untuk cek omset pendapatan profit per periode semakin memudahkan dalam kebutuhan customise laporan omset sesuai kebutuhan.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<p>Inilah aplikasi restoran cafe rumah makan menu digital modern khusus untuk penjualan point of sale mu.</p>
<a class="button" href="https://mesinkasir.github.io/e-catalog/MR.RESTO%20POS.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/0X-kPzRkfgs" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>
<br/><br/><Link class="float-left" to="/samba">&larr; Resto Samba</Link> <Link class="float-right" to="/noted">Noted Resto &rarr;</Link>
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

export default Mrresto
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