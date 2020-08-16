import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Laravelpos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Aplikasi kasir , aplikasi toko terbaru" />
      <Bio />
      <h1><strong><a title="Aplikasi toko kasir online laravelpos gratis website" href="/laravelpos">Laravelpos</a></strong></h1>
<h3>Aplikasi kasir , aplikasi toko terbaru - Aplikasi toko kasir online laravelpos gratis website.</h3>
<div class="row text-center">
<div class="col-12 col-md-12 p-3 p-md-3">
<img class="img-fluid" alt="aplikasi toko kasir online" src="/img/laravelpospc/laravel point of sale online.jpg"/>
<p>Develope menggunakan <a href="https://laravel.com" target="blank">laravel sang PHP artisan</a> semakin stabil dan powerfull digunakan dalam menunjang usaha kecil dan menengah solusi all in one apps dengan website modern untuk kebutuhan toko dan usaha.
</p>
<img class="img-fluid" alt="aplikasi toko kasir penjualan online" src="/img/laravelpospc/larapos online cashier apps.jpg"/>
<p>
Dengan menggunakan aplikasi ini membantu dalam kebutuhan untuk mencatat transaksi sekaligus hadirnya website modern memudahkan dalam memberikan informasi mengenai produk kita kepada pelanggan, desain yang elegan clean desain dengan pembuatan website menggunakan laravel sangat powerfull plus dengan hadirnya aplikasi toko kasir yang fokus untuk handle transaksi kasir semakin mempercepat dan memudahkan penjualan kasir dalam penerapan nya.
</p>
<img class="img-fluid" alt="aplikasi toko kasir online" src="/img/laravelspopc/mesinkasironline.jpg"/>
<h3><strong><a title="Applikasi Toko" href="/laravepos">Mobile POS on the Go !!</a></strong></h3>
<p>Dukungan mobile pos on the go semakin memudahkan dan irit biaya anggaran pengadaan <a title="Applikasi Toko" href="/laravepos">mesin kasir online</a> mu, cukup gunakan hanpdhone android iphone untuk karyawan dalam membantu input data menyimpan data bahkan melakukan tranasksi pembelian inventori stok management dalam kebutuhan nya, special memudahkan admin dalam cek pembukuan dan laporan detail dimana saja dan kapan saja secara real time online via smartphone nya.</p>
<p>Laravelpos simple fitur : master databased product dengan fitur gambar foto produk pencatatan stok awal dan harga jual , inventori stok management untuk melakukan transaksi in out secara cepat, penjualan kasir point of sale dengan gambar foto produk include dengan kemampuan nya digunakan untuk mencetak struk kasir penjualan,dan rangkuman list laporan penjualan memudahkan dalam kontrol dan cek penjualan pada toko.
</p>
</div>
<div class="col-12 col-md-12 p-3 p-md-5">
<a class="button" href="https://mesinkasir.github.io/e-catalog/LARAVEL%20POS%20WEB%20APPS.pdf" target="blank">Download</a> <a class="button" href="https://www.youtube.com/watch?v=YmrXkXHpFyM&t=2s" target="blank">Mobile Apps</a> <a class="button" href="https://www.youtube.com/watch?v=kbngRvg3xeE&t=19s" target="blank">Desktop APps</a> <a class="button" href="https://wa.me/6285646104747" target="blank" rel="nofollow">Chat Now</a> <a class="button" href="tel:+6285331361404" target="blank" rel="nofollow">Call Us</a>.
<br/><br/><Link class="float-left" to="/dxretail">&larr; Dx retail</Link> <Link class="float-right" to="/zpos">Zpos Apps &rarr;</Link>
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

export default Laravelpos
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
