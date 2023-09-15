import PropTypes from 'prop-types'
import '../styles/cartItem.css'

function CartItem({product}) {
    return (
        <div className='cartItem'>
            <img className='cartItemImg' src={product.image}></img>
            <p className='cartItemName'>{product.title}</p>
            <p className='cartItemAmount'>{product.amount}</p>
            <p className='cartItemPrice'>{'$'+product.price.toFixed(2)}</p>
            <p className='cartItemRemove'>remove  x</p>
        </div>
    )
}

CartItem.propTypes = {
    product: PropTypes.object,
}

export default CartItem;