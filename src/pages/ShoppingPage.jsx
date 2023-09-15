import NavBar from '../components/NavBar'
import PropTypes from 'prop-types'
import ProductCard from '../components/ProductCard'
import CategorySelector from '../components/CategorySelector'
import '../styles/shoppingPage.css'
import { useState } from 'react'
import filterProducts from '../utils/filterProducts'


function ShoppingPage ({ productArr, error, loading, setCartArr, cartArr }) {
  const [category, setCategory] = useState('all')
  if (error) return <p>A network error was encountered</p>
  if (loading)
    return (
      <>
        <NavBar />
        <p>Loading...</p>
      </>
    )
      let filteredProductArr = filterProducts(productArr, category);
  return (
    <>
      <NavBar />
      <CategorySelector setCategory={setCategory} currentCategory={category} />
      <div className='productCardContainer'>
        {filteredProductArr.map(product => (
          <ProductCard key={product.id} product={product} setCartArr={setCartArr} cartArr={cartArr} />
        ))}
      </div>
    </>
  )
}

ShoppingPage.propTypes = {
  productArr: PropTypes.array,
  error: PropTypes.any,
  loading: PropTypes.bool,
  setCartArr: PropTypes.func,
  cartArr: PropTypes.array,
}

export default ShoppingPage
