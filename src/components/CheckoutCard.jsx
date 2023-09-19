import { Link } from 'react-router-dom'
import '../styles/checkoutCard.css'
import handleCheckout from '../utils/handleCheckout'
import CheckoutTotal from './CheckoutTotal'
import PropTypes from 'prop-types'

function CheckoutCard ({ setCartArr, cartArr }) {
  return (
    <div className='checkoutCard'>
      <CheckoutTotal cartArr={cartArr} />
      <Link className='checkoutButtonLink' to={'/'}>
        <button
          onClick={() => handleCheckout(setCartArr)}
          className='checkoutButton'
        >
          Proceed to Checkout
        </button>
      </Link>
      <img src='src/assets/creditCards.png' className='checkoutCreditCards' />
    </div>
  )
}

CheckoutCard.propTypes = {
  setCartArr: PropTypes.func,
  cartArr: PropTypes.array
}

export default CheckoutCard
