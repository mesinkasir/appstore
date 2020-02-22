import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portable = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Mesin kasir murah portable terbaru tahun ini" />
      <Bio />
      <h1><strong><a href="/portable" title="portable point of sale">PORTABLE</a></strong></h1>
<p>Paket mesin kasir portable murah era modern point of sale system.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-0 p-md-0">
<img class="img-fluid shadow" alt="mesin kasir murah" src="/img/portable.png"/> 
</div>
<div class="col-12 col-md-12 p-3 p-md-5 bg-light">
    <h3><strong><a href="/portable" title="mesin kasir murah">Mesin Kasir Murah</a></strong></h3>
<p>Era mesin kasir portable point of sale modern dengan technology touchscreen dan kompleks akan system mewah dan megah pada desain nya menjadikan terbaik untuk usaha kecil dan menengah mu.</p>
</div>
<div class="col-12 col-md-5 p-3 p-md-5">
<img class="img-fluid" alt="mesin kasir murah" src="/img/mesinkasirmurah (3).jpg"/> 
</div>
<div class="col-12 col-md-7 p-3 p-md-5 text-left">
<p>Solusi Portable Point of sale untuk digunakan dapat digunakan tanpa aliran listrik karna sudah tertanam batrai memudahkan untuk mobilitas dan efisiensi pekerjaan mu.</p>
<p>Persembahan by <a href="https://www8.hp.com/" target="blank">hewllet packard</a> tablet windows 10inc yang sangat powerfull digunakan dalam menunjang usaha dan bisnis mu, intel inside tertanam menjadikan kesempurnaan system point of sale POS untuk digunakan.</p>
</div>
<div class="col-12 col-md-4 p-0 p-md-0">
<img class="img-fluid" alt="mesin kasir murah terbaru" src="/img/mesinkasirmurah (4).jpg"/> 
</div>
<div class="col-12 col-md-4 p-0 p-md-0">
<img class="img-fluid" alt="mesin kasir portable murah" src="/img/mesinkasirmurah (5).jpg"/> 
</div>
<div class="col-12 col-md-4 p-0 p-md-0">
<img class="img-fluid" alt="tablet pos" src="/img/mesinkasirmurah (6).jpg"/> 
</div>
<div class="col-12 col-md-6 p-3 p-md-5 text-left bg-light">
    <h3>Litle Series</h3><hr/>
    <p>Temukan solusi <a href="/portable" title="mesin kasir murah">mesin kasir murah</a> untuk kebutuhan usaha mu dengan litle series dukungan printer kasir mini hingga laci kasir full besi semakin memudahkan mu dalam aktivitas transaksi kasir hingga pembukuan nya dengan injeksi aplikasi yang bisa kamu pilih sesuai dengan kebutuhan dan bidang usaha.</p>
</div>
<div class="col-12 col-md-6 p-0 p-md-0 border border-light">
<img class="img-fluid" alt="tablet pos" src="/img/mesinkasirmurah (1).jpg"/> 
</div>
<div class="col-12 col-md-6 p-3 p-md-5 text-left order-md-2 bg-light">
    <h3>Hybrid Version</h3><hr/>
    <p>Kebutuhan full portable tanpa kabel dan aliran listrik bisa kamu dapatkan pada hybrid version series ini, dukungan printer bluetooth menjadikan nya mampu digunakan tanpa aliran listrik karena sudah tersedia daya batrai didalam nya memudahkan dalam berbagai aktivitas operasional dan pekerjaan.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-5 border border-light">
<img class="img-fluid" alt="mesin kasir murah" src="/img/mesinkasironline-murah.png"/> 
</div>
<div class="col-12 col-md-12 p-3 p-md-5 order-md-3">
<p>Rasakan sensasi point of sale modern terbaru up to date untuk menunjang usaha mu dengan injeksi aplikasi yang bisa kamu pilih sesuai dengan kebutuhan akan bidang usaha dengan variant paket set mesin kasir yang lengkap.</p>
<a class="button" href="https://mesinkasir.github.io/e-catalog/Mesin%20kasir%20tablet%20pos%20hybrid.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/cRKPNLRBTFU" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>
<p><br/>Mesin Kasir paket set lain nya siap untuk kamu gunakan , <Link to="/touchscreen">All in one touchscreen POS >></Link></p>
<p>Pilih aplikasi mu , <Link to="/applikasi">Aplikasi kasir toko dan resto >></Link></p>
</div>
</div>
    </Layout>
  )
}

export default Portable
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