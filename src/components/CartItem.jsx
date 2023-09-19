import PropTypes from 'prop-types'
import '../styles/cartItem.css'
import removeProduct from '../utils/removeProduct'
import CartItemAmount from './CartItemAmount'

function CartItem ({ product, cartArr, setCartArr }) {
  return (
    <div className='cartItem'>
      <img className='cartItemImg' src={product.image}></img>
      <p className='cartItemName'>{product.title}</p>
      <CartItemAmount
        product={product}
        cartArr={cartArr}
        setCartArr={setCartArr}
      />
      <p className='cartItemPrice'>{'$' + (product.price * product.amount).toFixed(2)}</p>
      <p
        className='cartItemRemove pointer'
        onClick={() => removeProduct(product, cartArr, setCartArr)}
      >
        remove x
      </p>
    </div>
  )
}

CartItem.propTypes = {
  product: PropTypes.object,
  cartArr: PropTypes.array,
  setCartArr: PropTypes.func
}

export default CartItem
