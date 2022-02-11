import React from "react"
import { Link, graphql } from "gatsby"

const DogsPage = ({
  data: {
    allDog: { nodes },
  },
}) =>
  nodes.map(({ dogId }) => (
    <div>
      <Link to={dogId}>{dogId}</Link>
    </div>
  ))

export default DogsPage

export const query = graphql`
  query {
    allDog {
      nodes {
        dogId
      }
    }
  }
`
