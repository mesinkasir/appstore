import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Vpos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
<SEO title="Mesin kasir online aplikasi toko VPOS" />
<Bio />
<h1><strong><a title="Mesin kasir online" href="/vpos">Vpos Web apps</a></strong></h1>
<h3>Mesin kasir online aplikasi toko VPOS.</h3>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko mesin kasir online" src="/img/mesin kasir online new vpos web app.jpg"/>
<p>Vpos web apps solusi terbaik dalam kebutuhan all in one website modern desain dengan clean dan fresh desain landing page plus aplikasi penjualan menjadi satu via vpos web apps dalam kebutuhan menunjang kebutuhan anda.</p>
<img class="img-fluid" alt="aplikasi minimarket toko z-pos online" src="/img/mesin kasir online vpos.jpg"/>
<p>
Sangat powerfull untuk digunakan kasir bertransaksi dengan cepat fitur yang lengkap memudahkan dalam operasional via <a title="Mesin kasir online" href="/vpos">mesin kasir online aplikasir toko vpos web apps</a>, fitur master data untuk mendaftarkan dan regristasi databased termasuk produk inventori stok hingga kebutuhan penjualan kasir secara cepat dan rangkuman rangkuman laporan detail tersedia pada vpos web apps ini.
</p>
<img class="img-fluid" alt="mesin kasir online vpos" src="/img/point of sale web app vpos.jpg"/>
<h3><strong><a title="Applikasi TOko" href="/vpos">Mobile POS on the Go !!</a></strong></h3>
<p>Dukungan mobile pos on the go semakin memudahkan dan irit biaya anggaran pengadaan mesin kasir mu, cukup gunakan hanpdhone android iphone untuk karyawan dalam membantu input data menyimpan data bahkan melakukan tranasksi pembelian inventori stok management dalam kebutuhan nya, special memudahkan admin dalam cek pembukuan dan laporan detail dimana saja dan kapan saja secara real time online via smartphone nya.</p>
<p>V-pos apps fitur : master databased user account ,  grup kategori produk untuk pengelompokan produk , satuan unit produk , product databased support barcode,harga beli , harga jual , inventori stok management ,transaksi penjualan kasir point of sale support barcode system, rangkuman laporan pendapatan detail serta laporan lain nya , dan berbagai fitur lain.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/vpos%20web%20apps.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=OwY-6OtH960" target="blank">Mobile Apps</a> <a class="button" href="https://www.youtube.com/watch?v=uZBBgEHw12M" target="blank">kasir APps</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
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
