import React from "react"
import { Link } from "gatsby"
import "../components/kasir.css"
import "../components/googlef8b9e33e9752d574.html"
import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1><strong>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link></strong>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>

    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(54),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
<ul class="nav bg-light shadow justify-content-center fixed-top">
  <li class="nav-item">
  <Link class="nav-link" to="/">Home</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" to="/applikasi">App</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/pos">POS</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" to="/contact">Contact</Link>
  </li>
</ul>
      <header>{header}</header>
      <main>{children}</main>
      <footer class="text-center"><hr/><small>
        © <a href="https://www.axcora.com">www.axcora.com</a>, Built with <a href="https://www.gatsbyjs.org" target="blank">Gatsby</a>
        </small></footer>
    </div>
  )
}

export default Layout
