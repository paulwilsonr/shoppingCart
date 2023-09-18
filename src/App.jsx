import { useEffect, useState } from 'react'
import Router from './Router'
import fetchProducts from './utils/fetchProducts'

function App () {
  const [productArr, setProductArr] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cartArr, setCartArr] = useState([])

  useEffect(() => {
    fetchProducts(setProductArr, setError, setLoading)
  }, [])

  return (
    <Router
      productArr={productArr}
      error={error}
      loading={loading}
      cartArr={cartArr}
      setCartArr={setCartArr}
    />
  )
}

export default App
