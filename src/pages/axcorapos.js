import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Axcorapos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Applikasi kasir" />
      <Bio />
      <h1><strong><a title="Applikasi Kasir dengan expired date" href="/axcorapos">AXCORAPOS</a></strong></h1>
<p>Simple kompleks dan lengkap dengan fitur terbaik expired date memudahkan cek dalam kebutuhan inventori stok yang mendekati expire date.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko" src="/img/axcorapos/mesin kasir online web based.png"/>
<p class="text-left">Modern web based technology memudahkan dalam akses berbagai device multi platform smartphone handphone android iphone hingga mesin kasir windows, dapat digunakan untuk kebutuhan offline desktop singgle standalone maupun untuk online mode dengan multiple login dalam kebutuhan nya.</p>
</div>
<div class="col-12 col-md-6">
<img class="img-fluid" alt="aplikasi kasir" src="/img/axcorapos/software kasir,program kasir,toko minimarket dan apotik expired date (10).jpg"/>
</div>
<div class="col-12 col-md-6"><img class="img-fluid" alt="aplikasi toko" src="/img/axcorapos/software kasir,program kasir,toko minimarket dan apotik expired date (26).jpg"/>
</div>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir toko online" src="/img/axcorapos/aplikasikasironline.png"/> </div>
<div class="col-12 col-md-8 p-3 p-md-3 text-left">
<h3><strong><a title="Applikasi Toko Online" href="/axcorapos">APLIKASI KASIR</a></strong></h3>
<p>Simple kompleks dengan expire date fitur terbaik dengan desain interface modern aplikasi kasir online ini layak untuk digunakan menunjang usaha mu, dengan web based memudahkan akses via smartphone android iphone secara real time online dan memudahkan shared based untuk pembagian divisi pembukuan dalam penggunaan nya.</p>
<p>Dalam offline mode instalasi via local host untuk kebutuhan singgle standalone system menjadi lebih baik dalam digunakan offline mode tanpa biaya bulanan dan sekali pakai untuk selama nya pada hardware yang sama.</p>
<p>Fitur lengkap databased mulai dari supplier , produk dengan kode barcode , transaksi pembelian include dengan expire date produk , penjualan point of sale transaksi kasir , laporan inventori stok , laporan inventori expired date , laporan pembelian , laporan penjualan , laporan actual profit, dan laporan laporan detail lain nya tersedia via <a href="/axcorapos" title="aplikasi kasir online">aplikasi kasir online</a> ini.</p>
<p>Era revolusi digital telah dimulai dari sini.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir" src="/img/axcorapos/software kasir,program kasir,toko minimarket dan apotik expired date (9).jpg"/>
<p>Kemudahan dalam cek inventori stok management untuk cek stok price list harga modal hingga reorder stok dan expire date produk.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko" src="/img/axcorapos/software kasir,program kasir,toko minimarket dan apotik expired date (23).jpg"/>
<p>Kontrol expired date produk dengan cek via searching tanggal bulan dan tahun sesuai dengan kebutuhan maka system akan menampilkan detail list porduk yang mendekati expire date.</p>
</div>
<img class="img-fluid" alt="aplikasi toko" src="/img/axcorapos/software kasir,program kasir,toko minimarket dan apotik expired date (13).jpg"/>
<p>Penjualan yang simple mudah dan cepat support dengan barcode metode tinggal scan kode barcode produk atau klik pencarian nama produk secara cepat software program akan menampilkan produk.</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/axcorapos/software kasir,program kasir,toko minimarket dan apotik expired date (28).jpg"/>
<p>Laporan keuangan tersedia untuk kemudahan monitoring omset profit dan pembukuan usaha.</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/AXCORAPOS.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/OmC_2bswSmA" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/vpos">&larr; V-POS</Link> <Link class="float-right" to="/hockeypos">Hockey POS &rarr;</Link>
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

export default Axcorapos
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
