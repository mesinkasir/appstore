import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Website = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Pembuatan website dengan technology modern terbaru - desain website" />
      <Bio />
      <h1><strong><a title="Applikasi Toko Online shop" href="/website">Website design services</a></strong></h1>
<p>Pembuatan website dengan technology modern terbaru - desain website.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" width="100%" alt="pembuatan website" src="/img/web modern.png"/>
<p>Solusi kebutuhan untuk pembangunan project website modern dengan technology terbaru maupun menggunakan aplikasi pembuatan website memudahkan dalam kebutuhan untuk membuat dan membangun website dengan mudah, selalu update dengan technology terbaru dalam develope website dengan menggunakan framweork semakin memudahkan dalam kebutuhan membangun website yang sempurna dan elegan, plus sentuhan desain agar website maupun blog menjadi lebih mewah dan elegan. 
</p>
<img class="img-fluid" alt="pembuatan website terbaru murah" width="100%" src="/img/website modern.jpg"/> 
<p>
Berbagai kebutuhan framework dan aplikasi untuk membangun website tersedia dalam kebutuhan develope website modern, mulai menggunakan blogger blogspot platform by google dengan memanfaatkan XML themesnya memudahkan dalam develope pembuatan website menggunakan blogspot untuk desain menjadi profesional website modern, menggunakan dynamic aplikasi software membuat website dengan menggunakan wordpress populer cms yang banyak digunakan di dunia, drupal dengan fitur lengkap nya, MODX dengan SEO power nya, maupun flatfile cms kategori dengan menggunakan GRAV , automad semakin memudahkan build dan develope website modern mu.
</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko online" src="/img/website new.jpg"/> 
</div>
<div class="col-12 col-md-8 p-3 p-md-3">
<h3><strong><a title="Applikasi toko kasir online web apps" href="/website">Modern technology</a></strong></h3>
<p>
    Kebutuhan untuk website dengan technology modern atau biasa disebut dengan static site bisa diwujudkan dengan menggunakan jekyll yang terkenal akan kecepatan nya maupun menggunakan gatsbyjs , angular era website modern kini semakin membuat pengunjung betah untuk membaca artikel dan penjelasan mengenai produk dan layanan jasa kamu tanpa loading. dengan desain unik dan landing page memberikan informasi detail mengenai produk dan layanan usaha , selain itu semakin infomratif nya website membuat mudah dalam deal dengan pelanggan. saat nya upgrade website mu sekarang.
    </p>
</div>
    <div class="col-12 col-md-12 p-3 p-md-3">
    <img class="img-fluid" alt="aplikasi toko online" src="/img/pembuatan website modern.png"/> 
    <h3><strong><a title="Applikasi toko kasir online web apps" href="/website">The Artisan</a></strong></h3>
    <p>
    Bangun dan buat website modern mu dengan menggunakan web app by laravel php artisan , salah satu populer framework yang banyak digunakan para developer ini memudahkan dalam pembuatan website modern mu include dengan aplikasi kasir toko penjualan maupun untuk restoran dalam kebutuhan pembuatan website modern dengan konsep all in one apps, website dan aplikasi pos point of sale menjadi satu dalam laravel php artisan untuk kebutuhan website dan aplikasi mu.
    </p>
    </div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/dexopos%20shop.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=1PWUy4woxSM&t=11s" target="blank">Mobile</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYMuYq7kJSmSGzF9SHvh_UWt" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/codepos">&larr; Develope APK</Link> <Link class="float-right" to="/dxretail">Online Shop &rarr;</Link>
</div>
</div>
    </Layout>
  )
}

export default Website
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
