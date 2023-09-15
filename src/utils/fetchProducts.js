

function fetchProducts (setProductArr, setError, setLoading) {
  
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('server error')
        }
        return res.json()
      })
      .then(res => {
        setProductArr(res);
      })
      .catch((error) => {
            setError(error)
      })
      .finally(()=> setLoading(false))
  
}

export default fetchProducts
