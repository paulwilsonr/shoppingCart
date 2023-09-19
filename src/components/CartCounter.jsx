import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import countProducts from '../utils/countProducts'

function CartCounter ({ cartArr }) {
  const totalItems = countProducts(cartArr);
  return (
    <Link to={'/cart'}>
      <p className='cartCount'>{totalItems}</p>
    </Link>
  )
}

CartCounter.propTypes = {
  cartArr: PropTypes.array
}

export default CartCounter
