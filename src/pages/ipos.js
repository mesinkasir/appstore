import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Ipos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="IPOS - Applikasi toko kasir" />
      <Bio />
      <h1><strong><a title="Applikasi IPOS" href="/ipos">I-POS</a></strong></h1>
<p>Aplikasi IPOS invoice of pos memudahkan mu dalam kebutuhan bertransaksi hingga pencatatan piutang pelanggan dengan metode invoice system dalam penerapan nya memudahkan dalam berbagai aspek kebutuhan pembukuan dan transaksi semakin mudah.</p>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid shadow" alt="aplikasi kasir online" src="/img/aplikasi invoice handphone android ios windows - Copy.jpg"/> 
<p class="text-left">Menggunakan web based technology memudahkan dalam akses berbagai device multi platform smartphone handphone android iphone hingga mesin kasir windows, dapat digunakan untuk kebutuhan offline desktop singgle standalone maupun untuk online mode dengan multiple login dalam kebutuhan nya.
</p>
<img class="img-fluid shadow" width="100%" alt="aplikasi kasir toko" src="/img/system software program aplikasi invoice penjualan handphone android ios windows.jpg"/>
<p>Dukungan penuh <a href="https://www.apachefriends.org/" target="blank">Xampp</a> , dengan bahasa pemrograman <a href="https://www.php.net/" target="blank">PHP</a> plus basis data popular dengan menggunakan <a href="https://www.mysql.com/" target="blank">MySql</a></p>
</div>
<img class="img-fluid shadow" width="100%" alt="aplikasi kasir toko" src="/img/invoicepos.png"/>
<p class="text-left">Fitur terbaik aturan hak akses, user login , shop area / kasa , Produk dengan barcode system , inventori stok management, pos point of sale penjualan kasir,  report laporan detail , konfigurasi info usaha.</p>
<p class="text-left">Hak akses : untuk mengatur kuasa dna memberikan persetujuan atas akses yang diberikan tinggal cek untuk menyetujui dan simpan.<br/>
User login : pendaftaran user akses dan karyawan yang bertugas menggunakan aplikasi toko kasir IPOS ini, include dengan hak kuasa diberikan.<br/>
Shoop area adalah untuk mendaftarkan shop store area dalam satu lokasi dan menggunakan databased stok di pusat dalam kebutuhan bertransaksi dengan menggunakan system counter.<br/>
Produk fitur untuk regristasi produk mendaftarkan produk yang berguna dalam penjualan pos point of sale lengkap dengan inventori management stok awal.<br/>
Cek stok laporan stok management untuk cek jumlah stok secara detail.<br/>
POS point of sale penjualan dengan system barcode / non dan support pembayaran cash hingga credit tempo.<br/>
Report berisi laporan laporan detail imset profit pendapatan toko.<br/>
INfo untuk konfigurasi company profile usaha toko.
</p>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/Invoice%20point%20of%20sale%20app.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/playlist?list=PLQDm6k9_HvYPbuAl0m6Fn_DUdMe-sr3EM" target="blank">Video</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/boost">&larr; Boosterpos</Link> <Link class="float-right" to="/cool">Light POS &rarr;</Link>
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

export default Ipos
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