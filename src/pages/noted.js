import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Noted = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi pencatatan restoran cafe rumah makan online" />
      <Bio />
      <h1><strong><a title="aplikasi pencatatan restoran online" href="/noted">NOTED</a></strong></h1>
      <p>Khusus untuk pencatatan restoran dengan simple dan kompleks system tersedia pembagian divisi waiters kitchen hingga admin dalam operasionalnya, aplikasi ini khusus untuk pencatatan restoran cafe kuliner saja dalam penggunaan nya dan sangat cocok bagi yang mempertahankan nota manual sebagai icon resto.</p>
<div class="row text-center">
<img class="img-fluid" alt="software restoran" src="/img/noteresto/resto order aplikasi restoran online.jpg"/> 
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="pencatatan restoran" src="/img/noteresto/waiters order.png"/> 
<p class="text-left">Waiters system dengan login waiters dan memiliki akses untuk mencatat pesanan pelanggan secara detail yang kemudian mengirimkan pesanan ke kitchen secara langsung via waiters order, dengan online system memudahkan waiters beroperasi via smartphone handphone nya.</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi pencatatan restoran lengkap" src="/img/noteresto/kitchen display.png"/> 
<p class="text-left">Kitchen divisi menerima pesanan dari waiters secara real time online dan sekaligus dapat update data via proses pesanan misalnya sedang disiapkan atau ready kirim ke meja pelanggan,dengan login khusus divisi kitchen dan kuasa akses untuk kitchen dalam kebutuhan nya .</p>
</div>
<div class="col-12 col-md-4 p-3 p-md-3">
<img class="img-fluid" alt="program restoran online" src="/img/noteresto/program restoran.png"/> 
<p class="text-left">Kasir memudahkan cek detail pesanan pelanggan berdasarkan ID pesanan, dan admin dapat cek pemasukan pendapatan secara detail berdasarkan transaksi harian mingguan bulanan hingga total transaksi pada restoran cafe dalam kebutuhan nya, semakin memudahkan monitoring pembukuan.</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
<a class="button" href="https://mesinkasir.github.io/e-catalog/noted%20resto%20pos%20app.pdf" target="blank">Download</a> <a class="button" href="https://youtu.be/x5iE8wUsZJw" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>
<br/><br/><Link class="float-left" to="/mrresto">&larr; Mr.resto Pos</Link> <Link class="float-right" to="/restopos">Unipos Resto &rarr;</Link>
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

export default Noted
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