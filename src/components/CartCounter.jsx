import PropTypes from 'prop-types'

function CartCounter({cartArr}) {
    if(cartArr.length === 0) {
        return '';
    }

    let totalItems = 0;
    cartArr.forEach(item => {
        totalItems = totalItems + item.amount;
    });
    return (
        <p className='cartCount'>{totalItems}</p>
    )
}

CartCounter.propTypes = {
    cartArr: PropTypes.array,
}

export default CartCounter;