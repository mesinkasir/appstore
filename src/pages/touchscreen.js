import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Touchscreen = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mesin kasir touchscreen layar sentuh" />
      <Bio />
      <h1><strong><a href="/touchscreen" title="All in one touchscreen point of sale">TOUCH POS</a></strong></h1>
<p>Paket mesin kasir touchscreen layar sentuh istimewah terbaru modern up to date di tahun ini.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-0 p-md-0">
<img class="img-fluid shadow" alt="mesin kasir touchscreen" src="/img/touchscreenpos.png"/> 
</div>
<div class="col-12 col-md-12 p-3 p-md-5 bg-light">
    <h3><strong><a href="/touchscreen" title="mesin kasir modern terbaru">Mesin Kasir Touchscreen</a></strong></h3>
<p>Stylish fashionable modern mesin kasir all in one touchscreen layar sentuh dengan desain material mewah dan elegan hingga sensitifnya touchscreen dalam penggunaan include multi port memudahkan integrasi dengan hardware kasir semakin sempurna untuk point of sale mu.</p>
</div>
<div class="col-12 col-md-6 p-0 p-md-0">
<img class="img-fluid" alt="ASUS touchscreen" src="/img/Asus-Logo.png"/>
</div>
<div class="col-12 col-md-6 p-3 p-md-5 text-left">
<p>Persembahan by <a title="touchscreen pos all in one" href="https://www.asus.com/" target="blank">ASUS</a> technology semakin luar biasa dalam kebutuhan menemani pembukuan dan mempercepat transaksi kasir dengan stabil dan cepat digunakan.</p>
</div>
<img class="img-fluid" width="100%" alt="all in one touchscreen" src="/img/mesin kasir touchscreen (10).jpg"/>
<div class="col-12 col-md-12 p-3 p-md-5 bg-light">
<p>Dukungan multi port memudahkan nya untuk digunakan bersama dengan peralatan kasir seperti printer kasir receipt pos, laci kasir cash darwer , mesin barcode hingga laser barcode untuk digunakan via all in one touchscreen pos ini.<br/>Kini saat upgrade pos system mu dengan produk terbaru dan stylish fashionable ini.</p>
</div>
<div class="col-12 col-md-3 p-0 p-md-0">
<img class="img-fluid" alt="layar sentuh" src="/img/mesin kasir touchscreen (4).jpg"/>
</div>
<div class="col-12 col-md-3 p-0 p-md-0">
<img class="img-fluid" alt="Online touchscreen" src="/img/mesin kasir touchscreen (9).jpg"/>
</div>
<div class="col-12 col-md-3 p-0 p-md-0">
<img class="img-fluid" alt="Point of sale touchscreen" src="/img/mesin kasir touchscreen (3).jpg"/>
</div>
<div class="col-12 col-md-3 p-0 p-md-0">
<img class="img-fluid" alt="touchscreen point of sale" src="/img/mesin kasir touchscreen (2).jpg"/>
</div>
<div class="col-12 col-md-6 p-3 p-md-5 text-left">
<p>Beragam variant memudahkan mu dalam pemilihan set package sesuai dengan kebutuhan dan bidang bisnis mu, free installasi dan setting siap digunakan semakin memanjakan mu untuk dapat langsung bertransaksi menggunakan <a href="/touchscreen" title="mesin kasir touchscreen all in one pos">mesin kasir touchcreen pos</a> ini.</p>
<p>Dukungan penuh dari aplikasi kami secara gratis bisa pilih software program untuk kebutuhan usaha dengan system injeksi langsung pada all in one pos ini memudahkan dalam pekerjaan dan operasionalnya.</p>
<p>Jadi apa yang anda tunggu miliki produk ini untuk kemajuan bisnis mu, hubungi kami untuk penawaran special dan price list daftar harga package set.</p>
<a class="button" href="https://mesinkasir.github.io/e-catalog/TOUCHSCREEN%20POS.pdf" target="blank">Download Now</a> <a class="button" href="https://youtu.be/NLxDbnyQ4r4" target="blank">Play Video</a>
</div>
<div class="col-12 col-md-6 p-0 p-md-0">
<img class="img-fluid" alt="mesin kasir all in one pos touchscreen" src="/img/allinonetouchscreenpos.png"/>
</div>
<div class="col-12 col-md-12 p-0 p-md-0">
<p><br/>Mesin Kasir paket set lain nya siap untuk kamu gunakan , <Link to="/portable">Mesin kasir murah portable >></Link><br/>Pilih aplikasi mu , <Link to="/applikasi">Aplikasi kasir toko dan resto >></Link></p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5 bg-light">
<p>Jangan ragu hubungi team staff kami untuk informasi dan konsultasi.</p>
<a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>
</div>
</div>
    </Layout>
  )
}

export default Touchscreen
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