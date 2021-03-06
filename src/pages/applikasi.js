import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Applikasi = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Daftar list Aplikasi toko kasir resto bisnis dan usaha" />
      <Bio />
      <h1><strong><a title="daftar aplikasi" href="/applikasi">APPLIKASI</a></strong></h1>
<p>Pilih aplikasi berdasarkan bidang usaha mu.</p>
<div class="row text-center">
<div class="col-12 col-md-4 p-3 p-md-3">
  <h3><strong><a href="/applikasi" title="aplikasi kasir dan aplikasi toko">Retail</a></strong></h3>
<img class="img-fluid" alt="mesin kasir" width="200" src="/img/mart.jpg"/> 
<p class="text-left">Special untuk usaha retail minimarket supermarket shop store toko outlet barber shop salon spa bengkel penjualan produk dan jasa.</p>
<Link class="button btn-block" to="/toko">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/applikasi" title="aplikasi restoran kuliner">Kuliner</a></strong></h3>
<img class="img-fluid" alt="mesin kasir" src="/img/streetfood.jpg"/>
<p class="text-left">Untuk usaha kuliner restoran cafe rumah makan street food fastfood warkop angkringan depot drink shop coffe shop toko oleh oleh.</p>
<Link class="button btn-block" to="/restoran">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/applikasi" title="aplikasi invoice online dan bisnis">Office</a></strong></h3>
<img class="img-fluid" alt="mesin kasir" width="200" src="/img/invoiceonline.jpg"/> 
<p class="text-left">Special untuk kebutuhan office dan bisnis dalam kebutuhan mencatat inventori stok , penerbitan invoice faktur hingga akuntansi.</p>
<Link class="button btn-block" to="/office">More info</Link>
</div>
    <div class="col-12 col-md-4 p-3 p-md-3">
  <h3><strong><a href="/applikasi" title="website modern technology">Website</a></strong></h3>
<img class="img-fluid" alt="Pembuatan website modern terbaru" width="200" src="/img/pembuatanwebsitemodern.jpg"/> 
<p class="text-left">Bangun dan buat website dengan technology modern bersama kami, aplikasi pembuatan website modern tersedia untuk bisnis mu.</p>
<Link class="button btn-block" to="/website">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/applikasi" title="aplikasi android apk">APK</a></strong></h3>
<img class="img-fluid" alt="pembuatan APK APP" src="/img/pembuatanapk.jpg"/>
<p class="text-left">Solusi pembuatan APK APPs modern dengan native version, mudah untuk di upload ke google & APP play store, dengan ID mu.</p>
<Link class="button btn-block" to="/apk">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/applikasi" title="aplikasi online shop">SHOP</a></strong></h3>
<img class="img-fluid" alt="Pembuatan toko online sohp" width="200" src="/img/pembuatantokoonlineshop.png"/> 
<p class="text-left">Full online shop dengan website + aplikasi kasir penjualan dan APK dalam build online shop integration untuk menunjang usaha.</p>
<Link class="button btn-block" to="/onlineshop">More info</Link>
</div>
<div class="col-12 col-md-12 p-3 p-md-5 text-center bg-light">
  <p><strong>Mobile technology</strong></p>
<p>All in one dengan online mode support berbagai os <a href="https://www.android.com/" target="blank" title="android">android</a> <a href="https://www.apple.com/id/iphone/" target="blank" title="android">iphone</a> windows maupun kebutuhan untuk offline mode tanpa biaya bulanan untuk kebutuhan mesin kasir mu.</p>
<Link class="button button-outline" to="/pos">Hardware</Link>
</div>
</div>
    </Layout>
  )
}

export default Applikasi
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
