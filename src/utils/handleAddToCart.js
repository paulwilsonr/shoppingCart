import PropTypes from 'prop-types'

function handleAddToCart (setCartArr, product, cartArr) {
  let tempCart = [...cartArr]

  if (tempCart.includes(product)) {
    let index = tempCart.indexOf(product)
    tempCart[index].amount = tempCart[index].amount + 1
  } else {
    product.amount = 1
    tempCart.push(product)
  }

  setCartArr(tempCart)
}

handleAddToCart.propTypes = {
  setCartArr: PropTypes.func,
  product: PropTypes.object,
  cartArr: PropTypes.array
}

export default handleAddToCart
