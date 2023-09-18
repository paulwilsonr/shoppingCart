import removeProduct from './removeProduct'

const handleChangeAmount = {
  addAmount (product, cartArr, setCartArr) {
    const tempCartArr = [...cartArr]
    const tempIndex = tempCartArr.indexOf(product)
    product.amount = product.amount + 1
    tempCartArr[tempIndex] = product
    setCartArr(tempCartArr)
  },
  subtractAmount (product, cartArr, setCartArr) {
    if (product.amount === 1) {
      removeProduct(product, cartArr, setCartArr)
    } else {
      const tempCartArr = [...cartArr]
      const tempIndex = tempCartArr.indexOf(product)
      product.amount = product.amount - 1
      tempCartArr[tempIndex] = product
      setCartArr(tempCartArr)
    }
  }
}

export default handleChangeAmount
