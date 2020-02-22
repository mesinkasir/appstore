/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
           site {
        siteMetadata {
          author
                }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
   <p>
        Solusi <strong>{author}</strong> aplikasi kasir,aplikasi toko,aplikasi restoran,aplikasi invoice untuk bisnis dan usaha.
      </p>

  )
}

export default Bio
