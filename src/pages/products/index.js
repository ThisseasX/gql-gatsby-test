import React from "react"
import { Link, graphql } from "gatsby"

const ProductsPage = ({
  data: {
    allProductsJson: { nodes },
  },
}) =>
  nodes.map(({ jsonId, description }) => (
    <div>
      <Link to={`/products/${jsonId}`}>{description}</Link>
    </div>
  ))

export default ProductsPage

export const query = graphql`
  {
    allProductsJson {
      nodes {
        jsonId
        description
      }
    }
  }
`
