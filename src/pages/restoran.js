import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Restoran = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Daftar list Aplikasi toko kasir resto bisnis dan usaha" />
      <Bio />
      <h1><strong><a title="daftar aplikasi" href="/restoran">RESTORAN</a></strong></h1>
      <p>Untuk usaha kuliner restoran cafe rumah makan street food fastfood warkop angkringan depot drink shop coffe shop toko oleh oleh.</p>
<div class="row text-center">
<div class="col-12 col-md-4 p-3 p-md-3">
  <h3><strong><a href="/restoran" title="aplikasi restoran lengkap waiters kasir kithcen admin">Unipos Resto</a></strong></h3>
<img class="img-fluid" alt="software restoran lengkap" src="/img/software restoran (2).png"/> 
<p class="text-left">Prioritas utama untuk usaha kuliner sangat lengkap kompleks dengan fitur yang lengkap memudahkan dalam pencatatan pembukuan dan memeprcepat transaksi, desktop offline based hingga clouds databased memudahkan dalam kebutuhan.
<br/><small>OS : Windows
  <br/>
  System : Offline
</small>
</p>
<Link class="button btn-block" to="/restopos">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/restoran" title="aplikasi restoran kuliner">Online Resto</a></strong></h3>
<img class="img-fluid" alt="online restoran" src="/img/restoran software program restoran online.png"/>
<p class="text-left">Online web based technology aplikasi restoran online include dengan online shop website untuk restoran memudahkan dalam setiap transaksi dan pembukuan, integrasi terlengkap online shop website dan aplikasi kasir restoran online.
<br/><small>OS : Android , Iphone , Windows
  <br/>
  System : Offline / Online Web Based
</small>
</p>
<Link class="button btn-block" to="/restoonline">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/restoran" title="aplikasi restoran android iphone online">Booster resto</a></strong></h3>
<img class="img-fluid" alt="aplikasi android restoran" src="/img/mesinkasirrrestorancafeonline.png"/> 
<p class="text-left">Kebutuhan terbaik dengan simple system dan kompleks dalam penggunaan nya, support dengan online based app memudahkan dalam mobilitas akses via smartphoenn dan tablet hingga mesin kasir mu, offline desktop untuk singgle standalone.
<br/><small>OS : Android , Iphone , Windows
  <br/>
  System : Offline / Online Web Based
</small>
</p>
<Link class="button btn-block" to="/restoboost">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
  <h3><strong><a href="/restoran" title="aplikasi restoran online">Resto Samba</a></strong></h3>
<img class="img-fluid" alt="software restoran lengkap" src="/img/13.png"/> 
<p class="text-left">Mesin kasir restoran murah dengan touchscreen metode semakin modern dan cepat dalam bertransaksi mengusung system electronic cash register semakin portable dalam penggunaan pembukuan dan transaksi secara cepat dengan layar sentuh,hingga laporan detail.
<br/><small>OS : Windows
  <br/>
  System : Offline
</small>
</p>
<Link class="button btn-block" to="/samba">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/restoran" title="aplikasi restoran kuliner online">Mr.Resto POS</a></strong></h3>
<img class="img-fluid" alt="aplikasi restoran online" src="/img/8. order pos penjualan 15.png"/>
<p class="text-left">Fokus untuk penjualan restoran cafe dengan menu digital system semakin keren untuk digunakan.<br/><small>OS : Android , Iphone , Windows
  <br/>
  System : Offline / Online Web Based
</small>
</p>
<Link class="button btn-block" to="/mrresto">More info</Link>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<h3><strong><a href="/restoran" title="aplikasi pencatatan restoran online ">Noted Resto</a></strong></h3>
<img class="img-fluid" alt="aplikasi online android restoran" src="/img/waiters order.png"/> 
<p class="text-left">Khusus untuk pencatatan restoran dengan simple dan kompleks system tersedia pembagian divisi waiters kitchen hingga admin dalam operasionalnya, aplikasi ini khusus untuk pencatatan restoran cafe kuliner saja dalam penggunaan nya dan sangat cocok bagi yang mempertahankan nota manual sebagai icon resto.<br/><small>OS : Android , Iphone , Windows
  <br/>
  System : Offline / Online Web Based
</small>
</p><Link class="button btn-block" to="/noted">More info</Link>
</div>
<div class="col-12 col-md-12"><br/><br/><Link class="float-left" to="/office">&larr; Office</Link> <Link class="float-right" to="/toko">Retail &rarr;</Link></div>
<div class="col-12 col-md-12 p-3 p-md-5 text-center bg-light">
  <p><strong>Mobile technology</strong></p>
<p>All in one dengan online mode support berbagai os <a href="https://www.android.com/" target="blank" title="android">android</a> <a href="https://www.apple.com/id/iphone/" target="blank" title="android">iphone</a> windows maupun kebutuhan untuk offline mode tanpa biaya bulanan untuk kebutuhan mesin kasir mu.</p>
<Link class="button" to="/applikasi">Aplikasi</Link> <Link class="button button-outline" to="/pos">Hardware</Link>
</div>
</div>
    </Layout>
  )
}

export default Restoran
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