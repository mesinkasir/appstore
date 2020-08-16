import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Onlineshop = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Pembuatan APK android APP ios googleplaystore" />
      <Bio />
      <h1><strong><a title="Pembuatan toko online shop modern" href="/onlineshop">Online Shop</a></strong></h1>
<p>Pembuatan toko online shop modern.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid shadow rounded" width="100%" alt="pembuatan toko online shop murah" src="/img/Screenshot_2020-07-08 Smartphone Archives - SHOP STORE POINT OF SALE + ONLINE SHOP WEBSITE.png"/>
<p>
Pembuatan website toko online shop modern dengan technology up to date untuk kebutuhan toko online modern, dengan dukungan aplikasi pembuat toko online shop software maupun develope menggunakan framework popular modern semakin mewah dan elegan pada toko online shop website mu. desain menarik dan kemudahan dalam penentuan pembayaran maupun penentuan pengiriman menjadikan kuasa penuh untuk transaski pada toko online shop mu.
</p>
<img class="img-fluid shadow rounded" width="100%" alt="toko online shop" src="/img/minimarket online shop website.jpg"/>
<h3><strong><a title="Applikasi toko online shop web apps" href="/online shop">FULL ONLINE SHOP</a></strong></h3>
<p>
Desain ramai yang menarik berfokus pada penjualan dengan kebutuhan akan baner dan wallpaper produk akan semakin menarik minat pelanggan dalam berberlanja ke toko online shop mu, memudahkan dalam cek produk berdasarkan kategori dan kebutuhan lain nya dengan modern online shop mu ini.
    </p>
    <img class="img-fluid shadow rounded" width="100%" alt="pembuatan toko online shop murah" src="/img/website coffe shop online shop - Copy - Copy - Copy.jpg"/>
    <p>
kebutuhan akan online shop toko online include dengan blog artikel berita memudahkan dalam kebutuhan untuk update produk maupun blog dalam kebutuhan rutinitas kebutuhan untuk ngeblog kamu via online shop modern ini.
    </p>
        <img class="img-fluid shadow rounded" width="100%" alt="Landing page toko online shop website" src="/img/donuts shop online website beautifull (2).jpg"/>
        <p>
        Landing page desain dengan online shop sebagai halaman khusus shop yang berfokus pada elegan nya website memudahkan pelanggan untuk akses website mu dan mencari informasi secara serta memudahkan berbelanja secara lansgung ke halaman shop toko online.
        </p>
   <img class="img-fluid shadow rounded" width="100%" alt="desain toko online shop modern" src="/img/create website online shop gadget smartphone store.png"/>
    <p>
Clean dan fresh design untuk ciri website yang menarik dengan minimalis konsep website include dengan halaman website berisi keterangan ID usaha dan produk serta layanan dan halaman <a title="Applikasi toko online shop web apps" href="/online shop">toko online shop</a> all in one.
    </p>
    <img class="img-fluid shadow rounded" width="100%" alt="APK android toko online" src="/img/aplikasi-apk-app-toko-online-shop-3-576x1024 - Copy.png"/>
    <p>
Kebutuhan untuk all in include dengan APK android yang terintegrasi pada online shop toko semakin memudahkan dalam aktivitas dengan website online shop dan APK native menyempurnakan toko online mu.
    </p>
     <img class="img-fluid shadow rounded" width="100%" alt="aplikasi kasir point of sale dan toko online shop" src="/img/wepos updates.png"/>
    <p>
Semakin menyempurnakan dalam kebutuhan handle pelanggan secara langsung pada toko mu via offline mode, dengan hadirnya aplikasi point of sale penjualan yang terintegrasi dengan toko online shop mu,plus website modern menyempurnakan all in one integrasi dengan full online untuk masa depan bisnis mu, saat nya upgrade ke pembukuan digital modern bersama kami. 
    </p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Creative%20Of%20ART%20Web%20design%20Digital%20ART.pdf" target="blank">Download</a> <a class="button" href="https://mesinkasir.github.io/e-catalog/integrated%20app%20online.pdf" target="blank">Full Online</a> <a class="button" href="https://www.youtube.com/watch?v=fbkKaHlxAoc" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/website">&larr; Website</Link> <Link class="float-right" to="/apk">APK &rarr;</Link>
</div>
</div>
    </Layout>
  )
}

export default Onlineshop
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
