import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Vpos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
<SEO title="Mesin kasir online Z-Pos minimarket toko" />
<Bio />
<h1><strong><a title="Mesin kasir online" href="/zpos">Zpos Web apps</a></strong></h1>
<h3>Mesin kasir online Z-POS apps untuk minimarket dan toko retail.</h3>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi minimarket toko z-pos online" src="/img/zpos/point of sale web app solutions.jpg"/>
<p>Z-POS dekstop version apps dan mobile version semakin memudahkan dalam kebutuhan untuk bertransaksi kasir dengan cepat plus rangkuman detail laporan , hingga webiste usaha dan toko all in one menjadi satu pada Z-POS Web apps untuk digunakan.</p>
<img class="img-fluid" alt="aplikasi minimarket toko z-pos online" src="/img/zpos/new point of sale web app.jpg"/>
<p>
Semakin mudah dengan Z-POS web app dengan berbagai kebutuhan untuk bertransaksi hingga kebutuhan untuk cek rangkuman pembukuan detail, dengan website landing page memberikan informasi kepada pelanggan mengenai produk produk dan promo kepada pelanggan semakin informatif untuk dekat dengan pelanggan via modern website, celan desain dan elegan semakin menyempurnakan kebutuhan website modern.
</p>
<img class="img-fluid" alt="aplikasi minimarket toko z-pos online" src="/img/zpos/zpos point of sale web app.jpg"/>
<h3><strong><a title="Applikasi Minimarket TOko" href="/zpos">Full dekstop Apps</a></strong></h3>
<p>
Full dekstop apps memberikan kemudahan pada kasir untuk bertransaksi via mesin kasir dalam menunjang kebutuhan transaksi untuk melayani pesanan pelanggan secara langsung , penggunaan barcode system siap digunakan dalam menunjang transaksi dengan cepat plus, integrasi dengan koneksi ke printer kasir memudahkan untuk mencetak struk kasir penjualan dengan cepat via z-pos dekstop apps dalam kebutuhan bertransaksi kasir dengan cepat.
</p>
<img class="img-fluid" alt="aplikasi minimarket toko z-pos online" src="/img/zpos/point of sale web app.jpg"/>
<h3><strong><a title="Applikasi TOko" href="/zpos">Mobile POS on the Go !!</a></strong></h3>
<p>Dukungan mobile pos on the go semakin memudahkan dan irit biaya anggaran pengadaan mesin kasir mu, cukup gunakan hanpdhone android iphone untuk karyawan dalam membantu input data menyimpan data bahkan melakukan tranasksi pembelian inventori stok management dalam kebutuhan nya, special memudahkan admin dalam cek pembukuan dan laporan detail dimana saja dan kapan saja secara real time online via smartphone nya.</p>
<p>Z-pos apps fitur : master databased user account , supplier , grup kategori produk untuk pengelompokan produk , satuan unit produk , product databased support barcode,  harga jual , inventori stok management ,transaksi penjualan kasir point of sale, rangkuman laporan pendapatan detail dan fitur lain nya .</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Z-pos.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=DWFDeQuU2E4" target="blank">Mobile Apps</a> <a class="button" href="https://www.youtube.com/watch?v=kh80c_NSEEM" target="blank">kasir APps</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/laravelpos">&larr; laravelpos</Link> <Link class="float-right" to="/vpos">Vpos &rarr;</Link>
</div>
<div class="col-12 col-md-12 p-3 p-md-5 text-center bg-light">
  <h3><strong>Mobile technology</strong></h3>
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
© 2020 GitHub, Inc.
