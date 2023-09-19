import PropTypes from 'prop-types'
import handleChangeAmount from '../utils/hangleChangeAmount'

function CartItemAmount ({ product, cartArr, setCartArr }) {
  return (
    <div className='cartItemAmount'>
      <p
        className='changeCartAmount pointer'
        onClick={() =>
          handleChangeAmount.subtractAmount(product, cartArr, setCartArr)
        }
      >
        -
      </p>
      <p className='productAmount'>{product.amount}</p>
      <p
        className='changeCartAmount pointer'
        onClick={() => {
          handleChangeAmount.addAmount(product, cartArr, setCartArr)
        }}
      >
        +
      </p>
    </div>
  )
}

CartItemAmount.propTypes = {
  product: PropTypes.object,
  cartArr: PropTypes.array,
  setCartArr: PropTypes.func
}

export default CartItemAmount
