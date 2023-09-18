function removeProduct(product, cartArr, setCartArr) {
    const tempCartArr = [...cartArr];
    const tempIndex = tempCartArr.indexOf(product);
    tempCartArr.splice(tempIndex, 1,);
    setCartArr(tempCartArr);
}

export default removeProduct;