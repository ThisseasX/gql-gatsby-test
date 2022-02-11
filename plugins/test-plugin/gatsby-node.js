const dogs = [
  {
    dogId: "dog-1",
    name: "Woofer",
    breed: "superdog",
  },
  {
    dogId: "dog-2",
    name: "Barker",
    breed: "normaldog",
  },
]

exports.sourceNodes = ({
  createNodeId,
  createContentDigest,
  actions: { createNode },
}) => {
  dogs.forEach(dog => {
    createNode({
      ...dog,
      id: createNodeId(dog.dogId),
      internal: {
        type: "Dog",
        contentDigest: createContentDigest(dog),
      },
    })
  })
}
