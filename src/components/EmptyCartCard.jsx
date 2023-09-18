import { Link } from 'react-router-dom'

function EmptyProductCard () {
  return (
    <div className='emptyCartCard'>
      <p className='emptyCartText'>
        Your cart is empty! Click below to start shopping.
      </p>
      <Link to='/store'>
        <button className='pointer emptyCartButton'>Shop Now</button>
      </Link>
    </div>
  )
}

export default EmptyProductCard
