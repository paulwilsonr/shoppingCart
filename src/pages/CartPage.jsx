import NavBar from '../components/NavBar'
import PropTypes from 'prop-types'
import EmptyCartCard from '../components/EmptyCartCard'
import CartProductCard from '../components/CartProductCard'

function CartPage ({ cartArr, setCartArr }) {
  return (
    <>
      <NavBar cartArr={cartArr} />
      <div className='cartPage'>
        {cartArr.length === 0 ? (
          <EmptyCartCard />
        ) : (
          <CartProductCard setCartArr={setCartArr} cartArr={cartArr} />
        )}
      </div>
    </>
  )
}

CartPage.propTypes = {
  cartArr: PropTypes.array,
  setCartArr: PropTypes.func
}

export default CartPage
