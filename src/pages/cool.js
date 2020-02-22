import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Cool = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Applikasi kasir toko baju sepatu fashion" />
      <Bio />
      <h1><strong><a title="Applikasi kasir toko baju sepatu fashion distro" href="/cool">LIGHT POS</a></strong></h1>
<p>Aplikasi keren dengan wallpaper produk pada pos display semakin elegan dan mewah pada pos penjualan, mudah digunakan dan sangat simple fokus untuk penjualan kasir pada penggunaan nya.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid shadow" alt="aplikasi kasir online" src="/img/lightpos fashionable point of sale.jpg"/> 
<p class="text-left">Simple system dalam penggunaan nya dan lebih fokus pada penjualan kasir point of sale memudahkan dalam operasional penggunaan nya bekerja dengan online system maupun offline system sesuai dengan kebutuhan mu, web based technology memudahkan akses dan melakukan transaksi via smartphone android iphone hingga mesin kasir windows mu secara langsung semakin keren aplikasi toko baju butik toko sepatu fashion dan berbagai toko shop store lain nya ini digunakan.
</p>
<p class="text-left">Fitur terbaik dengan databased : group merk produk , kategori produk , produk jual , pos point of sale penjualan kasir, laporan penjualan periode , laporan penjualan ringkasan , sangat simple untuk penjualan kasir toko mu. </p>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
</div>
<img class="img-fluid shadow" width="100%" alt="aplikasi kasir toko" src="/img/8. order pos.png"/> 
<p>Mengedepankan fashionable stylish era pos aplikasi toko modern untuk kesempurnaan display penjualan, kategori produk memudahkan dalam pencarian group produk jual dan dengan wallpaper produk untuk penjualan semakin keren dalam menggunakan aplikasi kasir pos ini.</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/LIGHT%20POS%20NEW%20FASHIONABLE%20POINT%20OF%20SALE.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/wBixsxzqyok" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/ipos">&larr; IPOS</Link> <Link class="float-right" to="/pointofsale">Chrompos &rarr;</Link>
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

export default Cool
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