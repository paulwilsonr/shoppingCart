import PropTypes from 'prop-types'
import countProducts from '../utils/countProducts'

function CartCounter ({ cartArr }) {
  const totalItems = countProducts(cartArr);
  return (
      <p className='cartCount'>{totalItems}</p>

  )
}

CartCounter.propTypes = {
  cartArr: PropTypes.array
}

export default CartCounter
