import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Next = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi inventori stok online plus bonus invoice" />
      <Bio />
      <h1><strong><a title="aplikasi invoice online software program invoice" href="/next">NEXT</a></strong></h1>
<p>Kompleks system untuk kebutuhan office dan bisnis dengan aplikasi yang super lengkap dan kompleks dalam digunakan, mulai dari penawaran , penjualan produk dan jasa dengan penerbitan invoice faktur penjualan hingga faktur pajak penjualan, pencatatan pembayaran , fitur pembayaran pelanggan, pencatatan tender project agenda dan laporan laporan detail.</p>
<div class="row text-center">
<img class="img-fluid" alt="Aplikasi invoice software invoice" src="/img/next/invoice-android-ios-terbaru.jpg"/>
<div class="col-12 col-md-7 p-0 p-md-0">
<img alt="aplikasi invoice software program invoice" class="img-fluid" src="/img/next/software-program-invoice-lengkap-terbaru.jpg"/>
    </div>
    <div class="col-12 col-md-5 p-3 p-md-3 text-left">
    <h3><strong><a href="/next" title="invoice online">Online</a></strong></h3>
<p>Dengan online based memudahkan akses via smartphone sehingga memudahkan karyawan untuk berkerja dengan akses applikasi via smartphone nya guna membantu transaksi dan mencatat pembukuan details.<br/><small>invoice online</small></p>
    </div>
    <div class="col-12 col-md-7 p-3 p-md-5">
<p class="text-left">Support dengan barcode system sangat mempercepat transaksi penjualan dengan barcode metode digunakan, cukup scan kode barcode via laser barcode maka system akan membaca dan menerjemahkan nya menjadi ID produk sesuai dengan pencatatan kode barcode.</p>
</div>
    <div class="col-12 col-md-5 p-0 p-md-0">
<img class="img-fluid" alt="Aplikasi invoice online software invoice online" src="/img/next/inventory-dan-invoice.jpg"/></div>
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="Aplikasi invoice online" src="/img/next/aplikasi-invoice-lengkap.jpg"/> 
<p class="text-left">Rasakan kemudahan dalam bekerja dengan operasional yang simple nan kompleks dukungan <a href="https://www.apachefriends.org/" target="blank">Xampp</a> web server dan menggunakan bahasa programing <a href="https://www.php.net/" target="blank">PHP</a> plus databased populer dunia dengan <a href="https://www.mysql.com/" target="blank">MySql</a> memudahkan karyawan berbagai divisi untuk bertugas menjalankan tugas nya via aplikasi ini, sangat cepat karena menggunakan web based system sehingga tidak perlu melakukan installasi apk app dan exe pada device anda.</p>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<img class="img-fluid" alt="inventori invoice barcode online" src="/img/next/software program invoice lengkap.jpg"/>
</div>
<div class="col-12 col-md-6 p-3 p-md-3">
<p class="text-left">Dukungan offline desktop mode dalam kebutuhan untuk standalone office system atau gunakan online clouds web based invoice online untuk kebutuhan mobile multi akses dari berbagai perangkat anda semakin memudahkan dalam setiap aktivitas pekerjaan.<br/>Inilah the next invoice generation.</p>
</div>
<img class="img-fluid" alt="inventori invoice barcode online" src="/img/next/software program invoice lengkap.jpg"/>
<div class="col-12 col-md-12 p-3 p-md-5">
<p>Paket set office invoice online system tersedia dengan free instalasi dan setting memudahkan dalam setiap operasional kebutuhan include dengan printer office memudahkan dalam cetak laporan laporan detail maupun print invoice faktur penjualan.</p>
<a class="button" href="https://mesinkasir.github.io/e-catalog/next%20invoice%20online%20generation.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYOmQuTpsZRU-QtZYYYTBs1L" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a><br/><br/>
<Link class="float-left" to="/inventori">&larr; Simple Management</Link> <Link class="float-right" to="/accounting">Accounting &rarr;</Link>
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

export default Next
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