import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Codepos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Codepos aplikasi kasir toko Point of sale" />
      <Bio />
      <h1><strong><a title="Applikasi toko kasir penjualan" href="/codepos">Codepos Apps</a></strong></h1>
<p>Codepos solusi murah web apps hybrid mode untuk kebutuhan pembukuan toko dan usaha bisnis, mengusung technology hybrid yang memfokuskan pada desktop version offline mode dalam kebutuhan akan request untuk develope dalam offline desktop mode maka codepos tercipta untuk menemani usaha dan bisnis mu.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko penjualan kasir" src="/img/online point of sale mesin kasir online apps (4).jpg"/>
<p>Technology modern dengan User interface terbaik sangat simple dan mudah digunakan, hadir dengan inventori management system untuk kontrol stok , hingga kebutuhan penjualan kasir dengan menggunakan gambar foto produk semakin mewah dan elegan pada display tampilan point of sale kasir via codepos apps.
</p>
<img class="img-fluid" alt="aplikasi toko aplikasi kasir5" src="/img/online point of sale mesin kasir online apps (1).jpg"/> 
<p>
Mengusung technology hybrid dalam penerapan nya memudahkan dalam kebutuhan online untuk melakukan upgrade system via clouds databased untuk kebutuhan dalam cek laporan dan stok dimana saja dan kapan saja via online clouds, selain db clouds tersedia website modern untuk digunakan dalam menunjang usaha dan bisnis, semakin memanjakan usaha dengan hadirnya website modern untuk icon bisnis dan toko mu di dunia net.
</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/online point of sale mesin kasir online apps (3).jpg"/> 
<h3><strong><a title="Applikasi TOko" href="/codepos">Modern apikasi toko kasir</a></strong></h3>
<p>Codepos aplikasi kasir toko penjualan ini , di desain mengikuti era modern apps saat ini dengan user interface yang modern tentu akan semakin mewah dalam digunakan menunjang berbagai pekerjaan dan pencatatan pembukuan dengan cepat.</p>
<p>Semakin simple dengan metode penjualan full touchscreen dalam penerapan nya, sadar akan kebutuhan yang lebih simple cepat dan murah tentunya maka codepos tercipta untuk itu semua, tanpa perlu penggunaan kode barcode lagi untuk melakukan penjualan kasir toko, karena aplikasi ini sudah support dengan full touchscreen dan penjualan dengan gambar produk, plus untuk mempermudah pencarian cepat pengelompokan kategori dan grup produk tersedia semakin memudahkan dan mempercepat transaksi kasir penjualan.</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/online point of sale mesin kasir online apps (1).png"/>
<p>Fitur terbaik dengan hadirnya master databased user account untuk login aplikasi kasir toko , grup produk untuk mengelompokan produk berdasarkan kategori ya ,produk jual dengan penggunaan gambar foto produk , inventori stok management untuk melakukan transaksi in out stok, penjualan kasir dengan gambar foto produk , proses cetak nota struk kasir , type pembayaran cash card online atau transfer bank , detail rangkuman laporan penjualan dan omset profit semua terangkum pada codepos aplikasi kasir aplikasi toko penjualan ini.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Codepos%20apps.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=Pc0iaMRYLsE" target="blank">Demo</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/larapos">&larr; Larapos</Link> <Link class="float-right" to="/dexopos">Dexopos &rarr;</Link>
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

export default Codepos
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
