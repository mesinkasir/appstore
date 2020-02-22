import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Pointofsale = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="SOFTWARE KASIR PROGRAM KASIR" />
      <Bio />
      <h1><strong><a title="point of sale" href="/pointofsale">POINT OF SALE</a></strong></h1>
<p>Rekomendasi terbaik untuk berbagai usaha anda gunakan software kasir progran kasir point of sale ini untuk kebutuhan kompleks dan terbaik dalam digunakan menunjang toko shop store minimarket hingga supermarket dengan penjualan produk dan jasa.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="software kasir" src="/img/pointofsale/minimarket.png"/>
<p class="text-left">Modern technology dengan desain grafis yang halus era point of sale milenial untuk digunakan dan lengkap dengan icon serta tema untuk pemanis lebih mewah dan elegan dengan menggunakan nya.</p>
</div>
<img class="img-fluid" alt="program kasir" src="/img/pointofsale/softwarekasir-laporan-catalog-product.png"/>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.java.com/" target="blank">JAVA</a> terkenal sangat superior dalam digunakan menunjang pembukuan dan transaksi secara stabil, plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
<div class="col-12 col-md-6 p-3 p-md-5 text-left">
<h3><strong><a title="Applikasi kasir software program kasir" href="/pointofsale">APLIKASI KASIR</a></strong></h3>
<p>Terlengkap dan detail dengan fitur modern mulai dari master databased user hak akses supplier produk support barcode system dan gambar foto produk , rakitan dan paket produk , fitur pilihan produk misal warna ukuran dan lain lain , pajak , inventori stok management, transfer stok , in out stok dengan berbagai kebutuhan seperti out stok untuk display atau expire produk dan kebutuhan lain nya.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="software kasir" src="/img/pointofsale/pembayaran.png"/></div>
<p>Super lengkap dan sangat lengkap dengan pembagian divisi memungkinkan dalam penggunaan dengan banyak mesin kasir misalnya stok inventori warehouse - kasir point of sale penjualan - admin backoffice dan kebutuhan pembagian divisi lain nya sangat memungkinkan dengan kemudahan offline desktop shared via wifi non kabel.</p>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi kasir" src="/img/pointofsale/softwarekasir-laporan-product-label.png"/>
</div>
<div class="col-12 col-md-6 p-3 p-md-3 text-left">
<p>Full support touchscreen metode modern hingga barcode technology semakin cepat dalam menunjang berbagai usaha dengan kompleks system menjadikan kesempurnaan point of sale technology ini untuk digunakan, dukungan perangkat integrasi terbaik dan plus price chekcker semakin memudahkan dalam aktivitas pekerjaan ny,Barcode label tersedia untuk ditempel pada rak display guna informasi detail mengenai kode barcode id produk dan harga nya semakin memudahkan pelanggan dalam cek harga produk.</p>
</div>
<p>Kemampuan nya dalam digunakan dengan all hardware kasir menjadikan kemudahan dalam point of sale system ini, <a href="/pointofsale">aplikasi kasir</a> sempurna untuk digunakan menunjang usaha anda.</p>
<img class="img-fluid" alt="aplikasi kasir" src="/img/pointofsale/premium price checker.jpg"/>
<p>Kebutuhan untuk kompleks system maka gunakan point of sale ini.</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/CHROMPOS%20retail.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/S7p1qDybViQ" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/cool">&larr; Light POS</Link> <Link class="float-right" to="/tokoonline">Toko Online &rarr;</Link>
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

export default Pointofsale
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