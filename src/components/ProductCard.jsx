import PropTypes from 'prop-types'
import ProductRating from './ProductRating'
import '../styles/productCard.css'
import handleAddToCart from '../utils/handleAddToCart'

function ProductCard ({ product, setCartArr, cartArr }) {
  return (
    <div id={product.id} className='productCard'>
      <img
        className='productCardImage'
        src={product.image}
        alt={product.title}
      ></img>
      <p className='productCardName'>{product.title}</p>
      <p className='productCardPrice'>{'$' + product.price.toFixed(2)}</p>
      <ProductRating ratingObj={product.rating} />
      <button
        className='addToCartButton pointer'
        onClick={() => handleAddToCart(setCartArr, product, cartArr)}
      >
        <img
          src='/assets/shopping-cart.png'
          className='addToCartIcon smallIcon'
        ></img>
        Add to Cart
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object,
  setCartArr: PropTypes.func,
  cartArr: PropTypes.array
}

export default ProductCard
