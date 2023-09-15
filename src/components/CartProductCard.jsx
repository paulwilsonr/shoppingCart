import PropTypes from 'prop-types'
import CartItem from './CartItem'
import CheckoutCard from './CheckoutCard'
import '../styles/cartProductCard.css'

function CartProductCard ({cartArr, setCartArr}) {

    return (
        <div className='cartItemContainer'>
            {cartArr.map((product) => {
                return <CartItem key={product.id} product={product} />
            })}
            <CheckoutCard setCartArr={setCartArr} cartArr={cartArr} />
        </div>
    )
}

CartProductCard.propTypes = {
    cartArr: PropTypes.array,
    setCartArr: PropTypes.func,
}

export default CartProductCard;