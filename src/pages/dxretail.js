import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Dxretail = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mesin kasir online dx-retail web apps" />
      <Bio />
      <h1><strong><a title="Mesin kasir online" href="/dxretail">DX-Retail</a></strong></h1>
<h3>Mesin kasir online dx-retail web apps.</h3>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/dexoposretailapps.jpg"/>
<p>DX-retail dexopos retail version diperuntukan untuk usaha retail dengan kebutuhan barcode system dalam penerapan nya, dengan metode barcode dalam transaksi semakin mempercepat untuk penjualan kasir pada toko dan minimarket, selain itu berbagai fitur yang tersedia juga melengkapi akan kebutuhan pembukuan dan transaksi detail pada usaha dan toko mu, saat nya update dengan dx retail apps online. installasi langsung aplikasi via clouds online semakin mempercepat kebutuhan untuk integrasi dengan berbagai platform dan os mulai dari smartphone androi iphone hingga mesin kasir windows. era kebebasan point of sale untuk kemajuan technology bisnis mu.
</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/online%20pos%20application.png"/> 
<p>
Secara default dexopos retail version atau biasa disebut dengan dx-retail apps ini sudah tersedia pembagian divisi secara langsung yang memudahkan dalam masing masing divisi untuk melaksanakan job dis nya, stok asisten admin apps yang membantu dalam pembuatan databased,menyimpan dan membuat data produk , supplier hingga melakukan pembelian ke supplier beserta laporan pembelian , selanjutnya kasir apps yang berfokus pada penjualan kasir dan login serta password menggunakan kuasa kasir memudahkan kasir saat login untuk membuka langsung applikasi kasir penjualan dan siap untuk melayani transaksi pelanggan secara cepat. dan admin apps yang memudahkan dalam kebutuhan untuk all fitur plus cek laporan income omset pendapatan pada toko minimarket. ketiga apps tersebut menjadi satu dalam databased dx-retail .
</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/software aplikasi toko minimarket online.png"/> 
<h3><strong><a title="Applikasi TOko" href="/dxretail">Mobile POS on the Go !!</a></strong></h3>
<p>Dukungan mobile pos on the go semakin memudahkan dan irit biaya anggaran pengadaan mesin kasir mu, cukup gunakan hanpdhone android iphone untuk karyawan dalam membantu input data menyimpan data bahkan melakukan tranasksi pembelian inventori stok management dalam kebutuhan nya, special memudahkan admin dalam cek pembukuan dan laporan detail dimana saja dan kapan saja secara real time online via smartphone nya.</p>
<p>Dx retail fitur : master databased supplier , grup kategori produk untuk pengelompokan produk , product databased dengan kdoe harga beli, harga jual , stok awal , barcode support , ooptional expired date fitur , transaksi pesanan pembelian atau PO ke supplier otomatis mengisi stok produk ,transaksi penjualan kasir point of sale, laporan inentori stok management , laporan pendapatan detail dan fitur lain nya .</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/DX-Retail.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=Zq3h_HY4ASo" target="blank">Stok Apps</a> <a class="button" href="https://www.youtube.com/watch?v=USPXOypllOU" target="blank">kasir APps</a> <a class="button" href="https://www.youtube.com/watch?v=ebXZcgoINuc" target="blank">Admin Apps</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/dexopos">&larr; dexopos</Link> <Link class="float-right" to="/laravelpos">Laravelpos &rarr;</Link>
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

export default Dxretail
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
