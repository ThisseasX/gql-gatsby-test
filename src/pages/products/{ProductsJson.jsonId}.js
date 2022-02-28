import { graphql } from "gatsby"
import React from "react"

const ProductPage = ({
  data: {
    productsJson: { id, jsonId, description },
  },
}) => (
  <div>
    <h1>{description}</h1>
    <p>{jsonId}</p>
    <p>{id}</p>
  </div>
)

export default ProductPage

export const query = graphql`
  query ($id: String) {
    productsJson(id: { eq: $id }) {
      id
      jsonId
      description
    }
  }
`
