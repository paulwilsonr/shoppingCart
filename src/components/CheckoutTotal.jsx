import PropType from 'prop-types'

function CheckoutTotal ({ cartArr }) {
  let runningTotal = 0
  cartArr.forEach(product => {
    runningTotal = runningTotal + product.price * product.amount
  })

  return (
    <div className='totalContainer'>
      <p className='totalText'>Estimated Total:</p>
      <p>{'$' + runningTotal.toFixed(2)}</p>
    </div>
  )
}

CheckoutTotal.propTypes = {
  cartArr: PropType.array
}

export default CheckoutTotal
