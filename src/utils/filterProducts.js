function filterProducts (productArr, category) {
  if (category === 'all') {
    return productArr
  }

  let filteredProductArr = productArr.filter(
    product => product.category === category
  )
  return filteredProductArr
}

export default filterProducts
