function countProducts (cartArr) {
    if (cartArr.length === 0) {
        return '';
      }
    
      let totalItems = 0
      cartArr.forEach(item => {
        totalItems = totalItems + item.amount
      })
      return totalItems;
}

export default countProducts;