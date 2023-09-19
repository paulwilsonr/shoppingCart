import PropTypes from 'prop-types'
import CartItem from './CartItem'
import CheckoutCard from './CheckoutCard'
import countProducts from '../utils/countProducts'
import '../styles/cartProductCard.css'

function CartProductCard ({ cartArr, setCartArr }) {
  const totalItems = countProducts(cartArr);
  return (
    <div className='cartContainer'>
      <div className='cartTitleContainer'>
      <h2 className='cartTitle'>Your Shopping Cart</h2>
      <h2 className='cartItemCount'>{totalItems + " Items"}</h2>
      </div>
      <div className='cartItemContainer'>
        {cartArr.map(product => {
          return (
            <CartItem
              key={product.id}
              product={product}
              cartArr={cartArr}
              setCartArr={setCartArr}
            />
          )
        })}
      </div>
      <CheckoutCard
        className='checkoutCardContainer'
        setCartArr={setCartArr}
        cartArr={cartArr}
      />
    </div>
  )
}

CartProductCard.propTypes = {
  cartArr: PropTypes.array,
  setCartArr: PropTypes.func
}

export default CartProductCard
