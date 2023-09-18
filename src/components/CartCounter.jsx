import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CartCounter ({ cartArr }) {
  if (cartArr.length === 0) {
    return ''
  }

  let totalItems = 0
  cartArr.forEach(item => {
    totalItems = totalItems + item.amount
  })
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
