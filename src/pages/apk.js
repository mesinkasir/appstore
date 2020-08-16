import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Apk = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Pembuatan APK android APP ios googleplaystore" />
      <Bio />
      <h1><strong><a title="Develope android APK native" href="/apk">Develope APK Native</a></strong></h1>
<p>Pembuatan APK android APP ios untuk upload ke googleplaystore.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" width="100%" alt="pembuatan apk android murah" src="/img/jasa pembuatan app dan apk murah.png"/>
<p>
pembuatan native APK untuk kemudahan dalam develope APK android atau APP ios memberikan kemudahan untuk semakin dekat dengan pelanggan, native APK develope menggunakan flutter dan dart menjadikan kesempurnaan untuk menggunakan aplikasi android mu.
</p>
<h3><strong><a title="Applikasi toko kasir online web apps" href="/apk">REAL APK</a></strong></h3>
<p>
Pembangunan pada project native APK full untuk <a title="Applikasi toko kasir online web apps" href="/apk">APK android</a> yang memudahkan dalam kebutuhan upload ke google play store dengan ID dan account usaha mu, semakin memudahkan dalam kebutuhan untuk memberikan keterangan pada APK sesuai dengan kebutuhan mu, mulai judul, deskripsi bisa kamu tulis sesuai deskripsi usaha , dengan kemudahan ini memberikan kebebasan dalam build APK .
    </p>
    <p>
Pada APK android native by default ini tersedia fitur 4 kategori dan 4 penjelasan produk maupun jasa memudahkan pelanggan untuk donwload APK via playstore dan membaca informasi mengenai produk dan jasa pada usaha mu, semakin dekat dengan pelanggan dengan native APK. unutk kebutuhan penambahan fitur penjelasan produk tersedia dengan harga tejangkau, dan tersedia fitur integrasi APK + website + online shop dan aplikasi kasir point of sale dalam satu based.
    </p>
    </div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/onlineshop">&larr; Online Shop</Link> <Link class="float-right" to="/website">Website &rarr;</Link>
</div>
</div>
    </Layout>
  )
}

export default Apk
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
