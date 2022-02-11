import React from "react"
import { graphql } from "gatsby"

const DogPage = ({
  data: {
    dog: { id, dogId, name, breed },
  },
}) => (
  <div>
    <h1>{name}</h1>
    <p>{id}</p>
    <p>{dogId}</p>
    <p>{name}</p>
    <p>{breed}</p>
  </div>
)

export const query = graphql`
  query ($id: String) {
    dog(id: { eq: $id }) {
      id
      dogId
      name
      breed
    }
  }
`

export default DogPage
