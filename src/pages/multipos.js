import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Multipos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Multi cabang" />
      <Bio />
      <h1><strong><a title="Applikasi Kasir multi cabang toko" href="/multipos">MULTIPOS</a></strong></h1>
<p>Pembukuan multi cabang cabang dalam satu databased server office pusat memudahkan dalam pembukuan dan transaksi secara real time online dimana saja dan kapan saja.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko" src="/img/multitoko/mesinkasironline-toko-multioutlet-store-shop-terbaru.png"/>
<p class="text-left">Modern web based technology memudahkan dalam akses berbagai device multi platform smartphone handphone android iphone hingga mesin kasir windows,online mode dengan multiple login dalam kebutuhan nya.</p>
</div>
<img class="img-fluid" alt="aplikasi multi toko cabang" src="/img/multitoko/mesinkasironline-toko-multioutlet-store-shop.png"/>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
<div class="col-12 col-md-6 p-3 p-md-3 text-left">
<h3><strong><a title="Applikasi kasir Toko Online" href="/multipos">APLIKASI KASIR TOKO</a></strong></h3>
<p>Memiliki fitur login antara admin dan branch cabang tersendiri memudahkan dalam setiap aktivitas pembukuan dan transaksi,all data akan ditarik masuk pada server admin backoffice.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir toko online" src="/img/multitoko/laporanstoreoutletshop-mesinkasironline.png"/> </div>
<p>Server admin backoffice pusat mendaftarkan seluruh toko cabang dan karyawan staff login admin per cabang dalam kebutuhan awal, selanjutnya login admin cabang memiliki fungsi berdasarkan split databased per cabang masing masing.</p>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir toko online" src="/img/multitoko/menuutama-mesinkasironline.png"/> </div>
<div class="col-12 col-md-6 p-3 p-md-3 text-left">
<p>Dan percabang dapat memasukan databased mulai dari produk , supplier dan pelanggan sesuai dengan kondisi real per cabang cabang dalam kebutuhan transaksi dan pencatatan pembukuan nya.split database memungkinkan per cabang dapat membuka usaha dengan bidang bisnis yang berlainan karena per cabang memiliki databased split.</p>
</div>
<p>Dengan online system maka secara otomatis apapun transaksi pada cabang akan ditarik masuk ke pusat dan dirangkum dalam laporan laporan detail mulai dari inventori stok management hingga laporan profit income pedapatan baik per cabang maupun global.</p>
<img class="img-fluid" alt="aplikasi kasir multi toko cabang" src="/img/multitoko/laporanstokpershoptokocabang-mesinkasironline.png"/>
<p>Laporan stok percabang memudahkan dalam kebutuhan akan cek inventori dan reorder produk yang mendekati minimum stok.</p>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir multi toko cabang" src="/img/multitoko/laporanpenjualanpertoko-store-outlet-shop-mesinkasironline.png"/>
<p>Laporan omset percabang dengan pilih cabang untuk cek omset income.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir multi toko cabang" src="/img/multitoko/laporanpenjualanglobal-mesinkasironline.png"/>
<p>Laporan profit global memudahkan dalam pembukuan usaha anda untuk cek omset keseluruhan cabang cabang menjadi satu dalam pembukuan multi cabang.</p>
</div>
<img class="img-fluid" alt="aplikasi toko" src="/img/multitoko/mesinkasironline-new-toko-multioutlet-store-shop.png"/>
<p>Dan kini nikmati dan rasakan kemudahan dunia dalam genggaman anda.</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/MULTIPOS%20OUTLET.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/1dcU3I-Ozcs" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/tokoonline">&larr; Toko Online</Link> <Link class="float-right" to="/posx">POS-X &rarr;</Link>
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

export default Multipos
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
