import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Posx = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Applikasi toko kasir online POS-X Web Appps" />
      <Bio />
      <h1><strong><a title="Applikasi TOko" href="/posx">POS-X Web Apps</a></strong></h1>
<p>Solusi terbaik untuk kebutuhan <a title="Applikasi TOko" href="/posx">aplikasi kasir toko online</a> dengan pos-x web app , simple mudah dan sangat lengkap dengan berbagai fitur yang tersedia pada pos-x web apps , memudahkan dalam pembukuan dan point of sale transaksi kasir.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/aplikasi toko online web app--posx.jpg"/>
<p>Full online system dalam kegunaan nya, installasi aplikasi dan databased secara online langsung semakin cepat dan ringan dalam kebutuhan akses via berbagai device dan OS platform, mudah digunakan via smartphone android iphone hingga mesin kasir windows dalam kebutuhan pos apps terbaik untuk toko retail dan shop ini plus bonus website landing page memberikan terobosan terbaru pada usaha mu untuk icon online dengan website landing page modern.
</p>
<p>Saat nya revolusi digital dimulai degan menggunakan pos-x web apps.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/mesin kasir online aplikasi toko-posx.jpg"/> 
<h3><a title="Applikasi TOko" href="/posx">Modern POS-X Apps</a></h3>
<p>Technology modern dengan menggunakan litespeed webserver semakin cepat dan stabil digunakan dalam online system, serta enskripsi dengan sertfikasi SSL lets encrypt / cloudflare semakin menjaga keamanan app dalam online mode modern.</p>
<p>
Dukungan technology web app all in one aplkasi toko kasir online untuk penjualan kasir plus website dan gratis domain name nama toko mu.com semakin mewah dalam build dan develope full online apps untuk usaha toko shop bisnis.
</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/aplikasi toko mesin kasir online-posx.jpg"/>
<p>Semakin fleksibel pos-x web app untuk digunakan via online clouds instalasi maupun via offline untuk kebutuhan single standalone mesin kasir memberikan kemudahan dalam penerapan system sesuai dengan kebutuhan usaha dan toko.</p>
<img class="img-fluid" alt="aplikasi toko online" src="/img/aplikasi toko mesin kasir online app-posx.jpg"/>
<p>Fitur yang lengkap memudahkan dalam kebutuhan untuk bertransaksi dengan cepat hingga pembukuan secara detail memudahkan dalam usaha dan bisnis mu.</p>
<p>Dukungan fitur terbaik : Master databased user account, customer , member card , supplier , product based support barcode dan touchscreen , transaksi pembelian , pencatatan alur kas in out, penjualan kasir dengan touchscreen bergambar produk maupun via barcode system , laporan inventori stok management, laporan pendapatan income profit detail dan lain nya.
</div>
    <div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/POS-X%20web%20apps.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=v9colB0cQHg" target="blank">Mobile</a> <a class="button" href="https://www.youtube.com/watch?v=TGjTbgIe3LI&t=8s" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/multipos">&larr; Multipos</Link> <Link class="float-right" to="/larapos">Larapos &rarr;</Link>
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

export default Posx
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
